var express = require('express');
var router = express.Router();

/* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('access/testPage', { title: 'Cloud_STQA' });
//});


router.get('/', function(req, res, next) {
  var fiveSecond = 1000 * 5;
  setTimeout(function() {
	  res.render('access/testPage', { title: 'Cloud_STQA' });
  }, fiveSecond);
});

module.exports = router;
