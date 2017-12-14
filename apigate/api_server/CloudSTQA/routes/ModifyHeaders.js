var express = require('express');
var router = express.Router();

router.use('/', function(req, res, next) {
	
	var Accept_Language = req.header('Accept-Language');
	var From = req.header('From');
	
	switch (req.method) { 

	    case 'GET':
			res.setHeader('Content-Type', 'cloud/stqa;charset=UTF-8');
			res.setHeader('Content-Language', 'cn');
			res.end('Server recieved header info - Accept-Language: ' + Accept_Language + '; ' + 'From: ' + From);	
	        break;
	    
	    case 'POST':
			res.setHeader('Content-Type', 'cloud/stqa;charset=UTF-8');
			res.setHeader('Content-Language', 'cn');
			res.end('Server recieved header info - Accept-Language: ' + Accept_Language + '; ' + 'From: ' + From);	
	        break;
	    
	    case 'PUT':
			res.setHeader('Content-Type', 'cloud/stqa;charset=UTF-8');
			res.setHeader('Content-Language', 'cn');
			res.end('Server recieved header info - Accept-Language: ' + Accept_Language + '; ' + 'From: ' + From);	
	        break;

	    case 'DELETE':
			res.setHeader('Content-Type', 'cloud/stqa;charset=UTF-8');
			res.setHeader('Content-Language', 'cn');
			res.end('Server recieved header info - Accept-Language: ' + Accept_Language + '; ' + 'From: ' + From);	
	        break;
	  }
	  
});

module.exports = router;