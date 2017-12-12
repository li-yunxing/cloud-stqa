var express = require('express');
var router = express.Router();

router.use('/', function(req, res, next) {
	
	if(req.method == 'GET'){

		var Accept_Language = req.header('Accept-Language');
		var From = req.header('From');

		res.setHeader('Content-Type', 'cloud/stqa;charset=UTF-8');
		res.setHeader('Content-Language', 'cn');
		res.end('Server recieved header info - Accept-Language: ' + Accept_Language + ';' + 'From: ' + From);	
		
	}else if(req.method == 'POST'){
		
		var Accept_Language = req.header('Accept-Language');
		var From = req.header('From');

		res.setHeader('Content-Type', 'cloud/stqa;charset=UTF-8');
		res.setHeader('Content-Language', 'cn');
		res.end('Server recieved header info - Accept-Language: ' + Accept_Language + ';' + 'From: ' + From);	
	}
});

module.exports = router;