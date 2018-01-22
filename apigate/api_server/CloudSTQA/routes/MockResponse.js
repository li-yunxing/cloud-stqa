var express = require('express');
var router = express.Router();

router.use('/', function(req, res, next) {
	
	res.setHeader('Content-Type', 'cloud/stqa;charset=UTF-8');
	res.setHeader('Content-Language', 'cn');
	
	if(req.method == 'GET'){
		
		res.send('<p>Server response header info - Content-Type: cloud/stqa;charset=UTF-8; Content-Language: cn</p>');	

	    
	}else if(req.method == 'POST'){	

		res.send('<p>Server response header info - Content-Type: cloud/stqa;charset=UTF-8; Content-Language: cn</p>');	

	    
	}
});

module.exports = router;

