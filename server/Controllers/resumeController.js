const ApiError = require('../middleware/apiError');
const ResumeService = require('../Services/resumeService');

class ResumeController {
  async createResume(req, res, next) {
    const { refreshToken } = req.cookies;
    const { newResume, mainInfo } = req.body;
    console.log(newResume, mainInfo);
    try {
      const resumeData = await ResumeService.createResume(refreshToken, newResume, mainInfo);
      res.json(resumeData);
    } catch (error) {
      next(error);
    }
  }
  async getResume(req, res, next) {
    const refreshToken = req.headers.refreshtoken;
    try {
      const resumeData = await ResumeService.getResume(refreshToken);
      res.json(resumeData);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ResumeController();
