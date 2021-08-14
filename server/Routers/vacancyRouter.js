const Router = require('express');
const vacancyController = require('../Controllers/vacancyController');
const router = new Router();

router.post('/vacancy', vacancyController.createVacancy);
router.post('/vacancy', vacancyController.deleteVacancy);
router.get('/vacancy', vacancyController.getVacancies);
router.get('/vacancy/:id', vacancyController.getCurrentVacancy);

module.exports = router;
