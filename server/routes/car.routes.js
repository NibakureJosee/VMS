const express = require('express');
const {vehicleController} = require('../controllers/car');

const router = express.Router();

router.route('/create').post(vehicleController);

exports.CarRoutes = router;