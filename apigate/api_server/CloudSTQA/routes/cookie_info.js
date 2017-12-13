var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

	  //obtain cookie info from client
	  var cookie = req.header('cookie');
	  
	  //set cookie info
	  res.setHeader('Set-Cookie', ['type=cloudstqa', 'language=javascript']);
	  
	  //output cookie info
	  res.send('Request cookie info from client: ' + cookie);
	  
	});

module.exports = router;