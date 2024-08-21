const router = require('express').Router();
const apiController = require('../controller/api.js');
const homeController = require('../controller/home.js');

router.use('/api', apiController);
router.use('/', homeController);

module.exports = router;