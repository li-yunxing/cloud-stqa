var express = require('express');
var router = express.Router();

/* GET home page. */
router.use('/', function(req, res, next) {

  if(req.method == 'GET'){

	  res.render('access/result', { title: 'Cloud_STQA' });
	
  }else if(req.method == 'POST'){
	
	  res.render('access/result', { title: 'Cloud_STQA' });
	  
  }else if(req.method == 'PUT'){
	
	  res.render('access/result', { title: 'Cloud_STQA' });
	  
  }else if(req.method == 'DELETE'){
	
	  res.render('access/result', { title: 'Cloud_STQA' });
  }

});

module.exports = router;