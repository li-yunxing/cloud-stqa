var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	
	router.get('/', function(req, res, next) {
		  var Onehour = 1000 * 3600;
		  setTimeout(function() {
			  res.render('access/testPageSleep', { title: 'Cloud_STQA' });
		  }, Onehour);
		  
		});
});

module.exports = router;