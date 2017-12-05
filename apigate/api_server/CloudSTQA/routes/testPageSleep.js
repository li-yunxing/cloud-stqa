var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  var fiveSecond = 1000 * 5;
  setTimeout(function() {
	  res.render('access/testPageSleep', { title: 'Cloud_STQA' });
  }, fiveSecond);
});

module.exports = router;
