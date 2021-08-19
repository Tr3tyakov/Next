const ApiError = require('../middleware/apiError');
const ResumeService = require('../Services/resumeService');

class ResumeController {
  async createResume(req, res, next) {
    const { refreshToken } = req.cookies;
    const { newResume, mainInfo } = req.body;
    try {
      const resumeData = await ResumeService.createResume(refreshToken, newResume, mainInfo);
      res.json(resumeData);
    } catch (error) {
      next(error);
    }
  }
  async getResume(req, res, next) {
    try {
      const resumeData = await ResumeService.getResume();
      res.json(resumeData);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ResumeController();
