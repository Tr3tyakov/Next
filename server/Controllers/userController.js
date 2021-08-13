const UserService = require('../Services/userService');
const { validationResult } = require('express-validator');
const ApiError = require('../middleware/apiError');
class UserController {
  async registration(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest('Ошибка при валидации', errors.array()));
      }
      const { email, password } = req.body;
      const userData = await UserService.registration(email, password);
      if (userData) {
        return res.json('Пользователь успешно зарегистрирован');
      }
      next(ApiError.BadRequest('Ошибка при регистрации пользователя'));
    } catch (e) {
      next(e);
    }
  }
  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const userData = await UserService.login(email, password);

      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 1000,
        httpOnly: true,
      });
      res.json(userData);
    } catch (e) {
      next(e);
    }
  }
  async logout(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const userData = await UserService.logout(refreshToken);
      res.clearCookie('refreshToken');
      res.json('Вы успешно вышли');
    } catch (e) {
      next(e);
    }
  }
  async refresh(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const userData = await UserService.refresh(refreshToken);
      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 1000,
        httpOnly: true,
      });
      res.json(userData);
    } catch (e) {
      next(e);
    }
  }
  async getUser(req, res, next) {
    const { refreshToken } = req.cookies;
    console.log(refreshToken, '325423523');
    try {
      const userData = await UserService.getUser(refreshToken);
      res.json(userData);
    } catch (e) {
      console.log(e);
    }
  }

  //update
  async updateSkills(req, res, next) {
    const { refreshToken } = req.cookies;
    const { skills } = req.body;
    console.log(skills, refreshToken);
    try {
      const userData = await UserService.updateSkills(refreshToken, skills);
      res.json(userData);
    } catch (e) {
      next(e);
    }
  }
  async updateMainInfo(req, res, next) {
    const { refreshToken } = req.cookies;
    const newUserData = req.body;
    const avatar = req.files;
    try {
      const userData = await UserService.updateMainInfo(refreshToken, newUserData, avatar);
      res.json(userData);
    } catch (e) {
      next(e);
    }
  }
  async updatePosition(req, res, next) {
    const { refreshToken } = req.cookies;
    const newUserData = req.body;
    console.log();
    try {
      const userData = await UserService.updatePosition(refreshToken, newUserData);
      console.log(userData, '4324324');
      res.json(userData);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new UserController();
