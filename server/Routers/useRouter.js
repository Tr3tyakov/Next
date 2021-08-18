const Router = require('express');
const router = new Router();
const userController = require('../Controllers/userController');
const { check } = require('express-validator');
router.post(
  '/registration',
  check('email').isEmail(),
  check('password').isLength({ min: 6 }),
  userController.registration,
);
router.post('/login', userController.login);
router.get('/logout', userController.logout);
router.get('/refresh', userController.refresh);

router.get('/user/mainInfo', userController.getMainInfo);
router.put('/update/mainInfo', userController.updateMainInfo);

module.exports = router;
