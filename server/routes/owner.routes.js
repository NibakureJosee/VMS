const express = require('express');
const {ownerController,getOwnersController} = require('../controllers/owner');

const router = express.Router();

router.route('/create').post(ownerController);
router.route('/getAll').get(getOwnersController);

exports.OwnerRoutes = router;