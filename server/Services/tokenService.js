const jwt = require('jsonwebtoken');
const TokenModel = require('../models/tokenModel');
class TokenService {
  async createTokens(user) {
    const accessToken = jwt.sign({ user }, process.env.ACCESS_SECRET_KEY, { expiresIn: '1h' });
    const refreshToken = jwt.sign({ user }, process.env.REFRESH_SECRET_KEY, { expiresIn: '1d' });
    return { accessToken, refreshToken };
  }
  async refresh(id, refreshToken) {
    const check = await TokenModel.findOne({ user: id });
    if (check) {
      check.refreshToken = refreshToken;
      return check.save();
    }
    TokenModel.create({ user: id, refreshToken });
  }
  async findToken(refreshToken) {
    const tokenData = await TokenModel.findOne({ refreshToken });
    return tokenData;
  }
  async deleteToken(refreshToken) {
    const tokenData = TokenModel.findOneAndDelete({ refreshToken });
    return tokenData;
  }
  validateRefreshToken(refreshToken) {
    try {
      const token = jwt.verify(refreshToken, process.env.REFRESH_SECRET_KEY);

      return token;
    } catch (e) {
      console.log(e);
    }
  }
  async validateAccessToken(accessToken) {
    try {
      const token = jwt.verify(accessToken, process.env.ACCESS_SECRET_KEY);
      return token;
    } catch (e) {
      return null;
    }
  }
}

module.exports = new TokenService();
