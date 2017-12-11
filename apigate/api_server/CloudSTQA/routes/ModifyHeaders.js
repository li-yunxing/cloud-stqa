var express = require('express');
var router = express.Router();

router.use('/', function(req, res, next) {
	
	if(req.method == 'GET'){

		var Accept_Language = req.header('Accept-Language');
		var From = req.header('From');
		console.log(Accept_Language);
		console.log(From);
		res.setHeader('Content-Type', 'cloud/stqa;charset=UTF-8');
		res.setHeader('Content-Language', 'cn');
		res.end('Server response header Content-Type with cloud/stqa;charset=UTF-8; Content-Language with cn');	
		
	}else if(req.method == 'POST'){
		
		var Accept_Language = req.header('Accept-Language');
		var From = req.header('From');
		console.log(Accept_Language);
		console.log(From);
		res.setHeader('Content-Type', 'cloud/stqa;charset=UTF-8');
		res.setHeader('Content-Language', 'cn');
		res.end('Server response header Content-Type with cloud/stqa;charset=UTF-8; Content-Language with cn');	
	}
});

module.exports = router;