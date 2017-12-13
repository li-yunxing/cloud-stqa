var express = require('express');
var router = express.Router();

router.use('/', function(req, res, next) {
	
	if(req.method == 'GET'){
		
		var file = req.query.file

		res.setHeader('Content-Type', 'cloud/stqa;charset=UTF-8');
		res.setHeader('Content-Language', 'cn');	
		
	    switch (file) { 
	    
        case 'html':
    		res.format({
			  html: function(){
				  res.send('<p>Server response header info - Content-Type: cloud/stqa;charset=UTF-8; Content-Language: cn</p>');	
			  }
  			});
            break;
            
        case 'json':
    		res.format({  			
  			  json: function(){
  			      res.send({message: 'Server response header info - Content-Type: cloud/stqa;charset=UTF-8; Content-Language: cn'});
  			  }
  			});
            break;
            
        case 'text':
    		res.format({
    		  text: function(){
    		      res.send('Server response header info - Content-Type: cloud/stqa;charset=UTF-8; Content-Language: cn');	
    	      }
      		});
            break;
        }
	    
	    
	}else if(req.method == 'POST'){
		
		
		var file = req.query.file

		res.setHeader('Content-Type', 'cloud/stqa;charset=UTF-8');
		res.setHeader('Content-Language', 'cn');	
		
	    switch (file) { 
	    
        case 'html':
    		res.format({
			  html: function(){
				  res.send('<p>Server response header info - Content-Type: cloud/stqa;charset=UTF-8; Content-Language: cn</p>');	
			  }
  			});
            break;
            
        case 'json':
    		res.format({  			
  			  json: function(){
  			      res.send({message: 'Server response header info - Content-Type: cloud/stqa;charset=UTF-8; Content-Language: cn'});
  			  }
  			});
            break;
            
        case 'text':
    		res.format({
    		  text: function(){
    		      res.send('Server response header info - Content-Type: cloud/stqa;charset=UTF-8; Content-Language: cn');	
    	      }
      		});
            break;
        }
	    
	}
});

module.exports = router;

