const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const userDto = require('../DTO/userDto');
const TokenService = require('./tokenService');
const ApiError = require('../middleware/apiError');
const fileService = require('./fileService');

class UserService {
  async registration(email, password) {
    try {
      const check = await userModel.findOne({ email });
      if (check) {
        throw ApiError.BadRequest('Данный пользователь уже существует');
      }
      const hashPassword = bcrypt.hashSync(password, 6);
      const user = userModel.create({ email, password: hashPassword });
      return user;
    } catch (e) {
      throw ApiError.BadRequest(e);
    }
  }
  async login(email, password) {
    try {
      const check = await userModel.findOne({ email });
      if (!check) {
        throw ApiError.BadRequest('Данный пользователь не зарегестрирован');
      }
      const checkPassword = bcrypt.compareSync(password, check.password);
      if (!checkPassword) {
        throw ApiError.BadRequest('Неправильный пароль');
      }
      const dto = new userDto(check);
      const tokens = await TokenService.createTokens(dto);
      await TokenService.refresh(dto.id, tokens.refreshToken);
      return { ...dto, ...tokens };
    } catch (e) {
      throw ApiError.BadRequest(e);
    }
  }
  async logout(refreshToken) {
    try {
      const check = await TokenService.deleteToken(refreshToken);
      return check;
    } catch (e) {
      throw ApiError.BadRequest(e);
    }
  }
  async refresh(refreshToken) {
    try {
      const tokenData = await TokenService.checkRefreshToken(refreshToken);
      const user = await userModel.findById(tokenData.user.id);
      const dto = new userDto(user);
      const tokens = await TokenService.createTokens(dto);

      await TokenService.refresh(dto.id, tokens.refreshToken);
      return { ...dto, ...tokens };
    } catch (error) {
      throw ApiError.BadRequest(error);
    }
  }

  async getUser(refreshToken) {
    try {
      const tokenData = await TokenService.checkRefreshToken(refreshToken);
      const userData = await userModel.findById(tokenData.user.id);
      return userData;
    } catch (e) {
      throw ApiError.BadRequest(e);
    }
  }
  async getMainInfo(refreshToken) {
    try {
      const tokenData = await TokenService.checkRefreshToken(refreshToken);
      const userData = await userModel.aggregate([
        {
          $match: {
            $expr: {
              _id: tokenData.user.id,
            },
          },
        },
        {
          $project: {
            _id: 0,
            email: 1,
            mainInfo: 1,
          },
        },
      ]);
      return userData;
    } catch (e) {
      throw ApiError.BadRequest(e);
    }
  }
  async updateSkills(refreshToken, skills) {
    try {
      const tokenData = await TokenService.checkRefreshToken(refreshToken);
      const user = await userModel.findById(tokenData.user.id);
      user.skills = skills;
      await user.save();
      return user;
    } catch (error) {
      console.log(error);
    }
  }

  async updateMainInfo(refreshToken, newUserData, avatar) {
    try {
      const tokenData = await TokenService.checkRefreshToken(refreshToken);
      const file = fileService.saveFile(avatar);
      const user = await userModel.findById(tokenData.user.id);
      const ImgAvatar = file ? file : tokenData.user.mainInfo.avatar;
      (user.mainInfo = {
        name: newUserData.name,
        secondName: newUserData.secondName,
        avatar: ImgAvatar,
        bithday: newUserData.date,
        gender: newUserData.gender,
        phone: newUserData.phone,
        city: newUserData.city,
        country: newUserData.country,
      }),
        await user.save();
      return user;
    } catch (error) {
      throw ApiError.BadRequest(error);
    }
  }
  async updatePosition(refreshToken, newUserData) {
    console.log(newUserData);
    try {
      const tokenData = await TokenService.checkRefreshToken(refreshToken);
      const user = await userModel.findById(tokenData.user.id);
      user.desiredPosition = newUserData.position;
      user.desiredPay = newUserData.salary;
      user.specializations = newUserData.specializations;
      await user.save();
      return user;
    } catch (error) {
      throw ApiError.BadRequest(error);
    }
  }
}
module.exports = new UserService();
