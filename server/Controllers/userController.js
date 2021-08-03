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
      console.log(userData);
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
      console.log(userData);
      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 1000,
        httpOnly: true,
      });
      res.json(userData);
    } catch (e) {}
  }
}

module.exports = new UserController();
