const favoriteModel = require('../models/favoriteModel');
const vacancyModel = require('../models/vacancyModel');
const tokenService = require('./tokenService');

class VacancyService {
  async createVacancy(refreshToken, newVacancy) {
    const tokenData = await tokenService.checkRefreshToken(refreshToken);
    const vacancy = await vacancyModel.create({
      user: tokenData.user.id,
      email: tokenData.user.email,
      phone: tokenData.user.mainInfo.phone,
      info: {
        userName: `${tokenData.user.mainInfo.name} ${tokenData.user.mainInfo.secondName}`,
        title: newVacancy.vacancy,
        city: newVacancy.city,
        specializations: newVacancy.specialization,
        startSalary: newVacancy.firstSalary,
        endSalary: newVacancy.secondSalary,
        currency: newVacancy.currency,
      },
      address: newVacancy.address,
      subtitleSalary: newVacancy.statusSalary,
      description: newVacancy.textArea,
      skills: newVacancy.skills,
      typeDriverLicense: newVacancy.category,
      workExperiences: newVacancy.experiences,
      schedule: newVacancy.workSchedule,
      typeEmployment: newVacancy.employment,
    });
    return vacancy;
  }

  async getVacancies() {
    const vacancyData = await vacancyModel.aggregate([
      {
        $project: {
          _id: 1,
          info: 1,
        },
      },
    ]);
    return vacancyData;
  }
  async getCurrentVacancy(id) {
    const vacancyData = await vacancyModel.findById(id);
    return vacancyData;
  }
  async deleteVacancy(idVacancy) {
    await vacancyModel.findByIdAndDelete(idVacancy);
  }
  async addFavoriteVacancy(refreshToken, id) {
    const tokenData = await tokenService.checkRefreshToken(refreshToken);
    const favorite = await favoriteModel.findOne({ user: tokenData.user.id });
    if (favorite) {
      const check = favorite.list.includes(id);
      if (check) {
        return favorite;
      }
      favorite.list = [...favorite.list, id];
      await favorite.save();
      return favorite;
    }
    const vacancyData = await favoriteModel.create({ user: tokenData.user.id, list: [id] });
    return vacancyData;
  }
  async getFavoriteVacancies(refreshToken) {
    const tokenData = await tokenService.checkRefreshToken(refreshToken);
    const { list } = await favoriteModel.findOne({ user: tokenData.user.id });
    const vacancy = await vacancyModel.aggregate([
      {
        $match: {
          $expr: { _id: list },
        },
      },
      {
        $project: {
          _id: 1,
          info: 1,
        },
      },
    ]);
    return vacancy;
  }
}
module.exports = new VacancyService();
