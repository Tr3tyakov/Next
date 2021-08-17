const ApiError = require('../middleware/apiError');
const VacancyService = require('../Services/vacancyService');

class VacancyController {
  async createVacancy(req, res, next) {
    const { refreshToken } = req.cookies;
    const { newVacancy } = req.body;
    try {
      const vacancyData = await VacancyService.createVacancy(refreshToken, newVacancy);
      res.json(vacancyData);
    } catch (error) {
      next(error);
    }
  }
  async getVacancies(req, res, next) {
    const refreshToken = req.headers.refreshtoken;
    try {
      const vacancyData = await VacancyService.getVacancies(refreshToken);
      res.json(vacancyData);
    } catch (error) {
      next(error);
    }
  }
  async getCurrentVacancy(req, res, next) {
    const id = req.params.id;
    try {
      const vacancyData = await VacancyService.getCurrentVacancy(id);
      res.json(vacancyData);
    } catch (error) {
      next(error);
    }
  }
  async changeFavoriteVacancies(req, res, next) {
    const { refreshToken } = req.cookies;
    const { id } = req.body;
    try {
      const vacancyData = await VacancyService.changeFavoriteVacancies(refreshToken, id);
      res.json(vacancyData);
    } catch (error) {
      next(error);
    }
  }
  async getFavoriteVacancies(req, res, next) {
    const refreshToken = req.headers.refreshtoken;
    try {
      const vacancyData = await VacancyService.getFavoriteVacancies(refreshToken);
      console.log(vacancyData);
      res.json(vacancyData);
    } catch (error) {
      next(error);
    }
  }
  async deleteVacancy(req, res, next) {
    const newVacancy = req.body;
    try {
      const vacancyData = await VacancyService.deleteVacancy(newVacancy);
      res.json(vacancyData);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new VacancyController();
