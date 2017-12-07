var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	
	  //send cookie info
	  res.setHeader('Set-Cookie', ['type=cloudstqa', 'language=javascript']);
      res.end('Set Cookie sucessful');
	  
	});

module.exports = router;