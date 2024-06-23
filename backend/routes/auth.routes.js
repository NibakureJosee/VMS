

const express = require('express');
const {LoginController,SignupController} = require('../controllers/auth');

const router = express.Router();

router.route('/signup').post(SignupController);
router.route('/login').post(LoginController);

exports.AuthRoutes = router;