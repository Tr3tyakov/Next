const favoriteModel = require('../models/favoriteModel');
const vacancyModel = require('../models/vacancyModel');
const tokenService = require('./tokenService');

class VacancyService {
  async createVacancy(refreshToken, newVacancy) {
    const tokenData = await tokenService.checkRefreshToken(refreshToken);
    const vacancy = await vacancyModel.create({
      user: tokenData.user.id,
      email: tokenData.user.email,
      phone: tokenData.user.phone,
      info: {
        userName: `${tokenData.user.name} ${tokenData.user.secondName}`,
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

  async getVacancies(refreshToken) {
    const vacancyData = await vacancyModel.aggregate([
      {
        $project: {
          _id: 1,
          info: 1,
        },
      },
    ]);

    if (refreshToken) {
      const tokenData = await tokenService.checkRefreshToken(refreshToken);
      const favorite = await favoriteModel.findOne({ user: tokenData.user.id });
      return { vacancyData, favorite };
    }
    return vacancyData;
  }
  async getCurrentVacancy(id) {
    const vacancyData = await vacancyModel.findById(id);
    return vacancyData;
  }
  async changeFavoriteVacancies(refreshToken, id) {
    const tokenData = await tokenService.checkRefreshToken(refreshToken);
    const favorite = await favoriteModel.findOne({ user: tokenData.user.id });

    if (favorite) {
      const check = favorite.list.includes(id);
      if (check) {
        favorite.list = favorite.list.filter((element) => element.toString() !== id);
        const favoriteData = await favorite.save();
        return { favoriteData, message: 'Вакансия была успешно удалена' };
      }
      favorite.list = [...favorite.list, id];
      const favoriteData = await favorite.save();
      return { favoriteData, message: 'Вакансия была успешно добавлена' };
    }
    const favoriteData = await favoriteModel.create({ user: tokenData.user.id, list: [id] });
    return { favoriteData, message: 'Вакансия была успешно создана' };
  }
  async getFavoriteVacancies(refreshToken) {
    const tokenData = await tokenService.checkRefreshToken(refreshToken);
    const favoriteData = await favoriteModel.findOne({ user: tokenData.user.id });
    if (!favoriteData) {
      return null;
    }
    const vacancy = await vacancyModel.aggregate([
      {
        $match: {
          _id: { $in: favoriteData.list },
        },
      },
      {
        $project: {
          _id: 1,
          info: 1,
        },
      },
    ]);
    return { vacancy, list: favoriteData.list };
  }
}
module.exports = new VacancyService();
