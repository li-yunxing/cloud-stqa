var express = require('express');
var router = express.Router();

router.use('/', function(req, res, next) {
	
		
		var file = req.query.file

		res.setHeader('Content-Type', 'cloud/stqa;charset=UTF-8');
		res.setHeader('Content-Language', 'cn');	
		
	    switch (file) { 
	    
        case 'html':
    		res.format({
			  html: function(){
				  res.send('<p>The Body contents included in HTML file</p>');	
			  }
  			});
            break;
            
        case 'json':
    		res.format({  			
  			  json: function(){
  			      res.send({message: 'The Body contents included in JSON file'});
  			  }
  			});
            break;
            
        case 'text':
    		res.format({
    		  text: function(){
    		      res.send('The Body contents included in TEXT file');	
    	      }
      		});
            break;
        }
	    
});

module.exports = router;

