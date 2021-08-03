const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const userDto = require('../DTO/userDto');
const TokenService = require('./tokenService');
const ApiError = require('../middleware/apiError');
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
    if (!refreshToken) {
      throw ApiError.UnathorizedError();
    }
    try {
      const tokenData = await TokenService.validateRefreshToken(refreshToken);
      const tokenDB = await TokenService.findToken(refreshToken);
      if (!tokenData || !tokenDB) {
        throw ApiError.UnathorizedError();
      }
      const user = await userModel.findById(tokenData.user.id);
      const dto = new userDto(user);
      const tokens = await TokenService.createTokens(dto);
      await TokenService.refresh(dto.id, tokens.refreshToken);
      return { ...dto, ...tokens };
    } catch (e) {
      throw ApiError.BadRequest(e);
    }
  }
}

module.exports = new UserService();
