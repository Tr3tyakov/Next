const resumeModel = require('../models/resumeModel');
const tokenService = require('./tokenService');

class ResumeService {
  async createResume(refreshToken, newVacancy, mainInfo) {
    const tokenData = await tokenService.checkRefreshToken(refreshToken);
    const resume = await resumeModel.create({
      mainInfo,
      languages: newVacancy.languages ? newVacancy.languages : '',
      skills: newVacancy.skills ? newVacancy.skills : '',
      typeLicense: {
        haveCar: newVacancy.typeLicense.haveCar ? true : false,
        typeCategory: newVacancy.typeLicense.typeCategory,
      },

      education: newVacancy.education,
      specializations: newVacancy.specializations,
      desiredPosition: newVacancy.desiredPosition,
      desiredPay: newVacancy.desiredPay,
      aboutMe: newVacancy.aboutMe,
    });
    return resume;
  }
  async getResume() {
    return await resumeModel.find().limit(20);
  }
}
module.exports = new ResumeService();
