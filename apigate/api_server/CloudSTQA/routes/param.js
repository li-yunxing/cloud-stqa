var express = require('express');
var router = express.Router();

router.use('/', function(req, res, next) {
	
	if(req.method == 'GET'){
		var name = req.query.name;
		var pwd = req.query.password;

		console.log(name);
		console.log(pwd);

		res.format({  			
			  json: function(){
			      res.send({message: 'name: ' + name +'\n\n' + 'password: ' + pwd});
			  }
			});
		
	}else if(req.method == 'POST'){
		var name = req.body.name;
		var pwd = req.body.password;	
		
		console.log(name);
		console.log(pwd);
		
		res.format({  			
			  json: function(){
			      res.send({message: 'name: ' + name +'\n\n' + 'password: ' + pwd});
			  }
			});
	}
});

module.exports = router;