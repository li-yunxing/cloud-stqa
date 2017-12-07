var express = require('express');
var router = express.Router();

router.use('/', function(req, res, next) {
	
	if(req.method == 'GET'){

		var Accept_Language = req.header('Accept-Language');
		console.log(Accept_Language);
		res.setHeader('Content-Type', 'fromServer/stqa');
		res.end('Server response header Content-Type with fromServer/stqa');	
		
	}else if(req.method == 'POST'){
		
		var Accept_Language = req.header('Accept-Language');
		console.log(Accept_Language);
		res.setHeader('Content-Type', 'fromServer/stqa');
		res.end('Server response header Content-Type with fromServer/stqa');	
	}
});

module.exports = router;