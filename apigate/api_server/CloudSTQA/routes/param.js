var express = require('express');
var router = express.Router();

router.use('/', function(req, res, next) {
	
	  switch (req.method) { 
	    
	    case 'GET':
			var name = req.query.name;
			var pwd = req.query.password;

			res.format({  			
				  json: function(){
				      res.send({message: 'name: ' + name +'; ' + 'password: ' + pwd});
				  }
				});
	        break;
	        
	    case 'POST':
			var name = req.body.name;
			var pwd = req.body.password;	
			
			res.format({  			
				  json: function(){
				      res.send({message: 'name: ' + name +'; ' + 'password: ' + pwd});
				  }
				});
	        break;
	        
	    case 'DELETE':
			var name = req.body.name;
			var pwd = req.body.password;	
			
			res.format({  			
				  json: function(){
				      res.send({message: 'name: ' + name +'; ' + 'password: ' + pwd});
				  }
				});
	        break;
	  }
	
});

module.exports = router;