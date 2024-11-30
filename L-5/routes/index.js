var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
console.log('req and res: ',req, res)
  res.render('index', { title: 'ТуДу о нот ТуДу' });
});

module.exports = router;
