var express = require('express');
var router = express.Router();

router.use('/', function(req, res, next) {
	
	if(req.method == 'GET'){

		res.setHeader('Content-Type', 'cloud/stqa;charset=UTF-8');
		res.end('Server response header Content-Type with cloud/stqa;charset=UTF-8');	
		
	}else if(req.method == 'POST'){
		
		res.setHeader('Content-Type', 'cloud/stqa;charset=UTF-8');
		res.end('Server response header Content-Type with cloud/stqa;charset=UTF-8');
	}
});

module.exports = router;