var express = require('express');
var router = express.Router();

router.use('/', function(req, res, next) {
	
	if(req.method == 'GET'){
		var name = req.query.name;
		var pwd = req.query.password;

		console.log(name);
		console.log(pwd);

		res.render('access/result', { name: name, pwd: pwd });
		
	}else if(req.method == 'POST'){
		var name = req.body.name;
		var pwd = req.body.password;	
		
		console.log(name);
		console.log(pwd);

		res.render('access/result', { name: name, pwd: pwd });
	}
});

module.exports = router;