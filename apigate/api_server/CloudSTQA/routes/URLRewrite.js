var express = require('express');
var router = express.Router();

/* GET home page. */
router.use('/', function(req, res, next) {

  switch (req.method) { 

    case 'GET':
        
    	//---------------Modify Headers와 URL Rewrite 동시 적용 시 Request Headers 값 체크--------------
    	var Accept_Language = req.header('Accept-Language');

        if(Accept_Language == 'apigw_request'){
        	
        	console.log(Accept_Language);
        	res.end('Server recieved header info - Accept-Language: ' + Accept_Language);	
        	
        }else{

        	res.render('access/result', { title: 'Cloud_STQA' });      	
        }
        //-------------------------------------------------------------------------------------
        break;
    
    case 'POST':
        res.render('access/result', { title: 'Cloud_STQA' });
        break;
    
    case 'PUT':
        res.render('access/result', { title: 'Cloud_STQA' });
        break;

    case 'DELETE':
        res.render('access/result', { title: 'Cloud_STQA' });
        break;
  }
});

module.exports = router;