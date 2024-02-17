const express = require('express');
const router = express.Router();
const controller = require('../controller/controller1')


router.get('/', controller.homePage);

module.exports = router;
