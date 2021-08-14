const ApiError = require('../middleware/apiError');
const VacancyService = require('../Services/vacancyService');

class VacancyController {
  async createVacancy(req, res, next) {
    const { refreshToken } = req.cookies;
    const { newVacancy } = req.body;
    console.log(newVacancy);
    try {
      const vacancyData = await VacancyService.createVacancy(refreshToken, newVacancy);
      res.json(vacancyData);
    } catch (error) {
      next(error);
    }
  }
  async getVacancies(req, res, next) {
    try {
      const vacancyData = await VacancyService.getVacancies();
      res.json(vacancyData);
    } catch (error) {
      next(error);
    }
  }
  async getCurrentVacancy(req, res, next) {
    const id = req.params.id;
    console.log(id);
    try {
      const vacancyData = await VacancyService.getCurrentVacancy(id);
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
