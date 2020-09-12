var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    console.log("123")
    console.log(process.env.DB_HOST)
    console.log(process.env.DB_PASSWORD)
    res.render('index', { title: 'Express' });
});

router.use('/study', require('./study'));

module.exports = router;
