var express = require('express');
var router = express.Router();

router.use('/study', require('./study'));

module.exports = router;
