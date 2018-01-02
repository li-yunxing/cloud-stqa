var express = require('express');
var router = express.Router();
var http = require("http");

/* GET home page. */
router.use('/', function(req, res, next) {
	
  switch (req.method) { 
    
    case 'GET':
    	//---------------Modify Headers와 URL Rewrite 동시 적용 시 Request Headers 값 체크--------------
    	var Accept_Language = req.header('Accept-Language');
        	
        console.log(Accept_Language);
        res.end('Server recieved header info - Accept-Language: ' + Accept_Language);	
        //-------------------------------------------------------------------------------------
        
        //--------------Modify Headers와 URL Rewrite 동시 적용 시 Response headers 값 체크--------------
		res.setHeader('Content-Type', 'cloud/stqa;charset=UTF-8');
		res.setHeader('x-response-header', 'x-value');
        //-------------------------------------------------------------------------------------
        break;
        
    case 'POST':
        res.render('access/testPage', { title: 'Cloud_STQA' });
        break;
        
    case 'PUT':
        res.render('access/testPage', { title: 'Cloud_STQA' });
        
        //------------ post log to log & crash -------------
        var options = {
          "method": "POST",
          "hostname": "api-logncrash.cloud.toast.com",
          "port": null,
          "path": "/v2/log",
          "headers": {
            "content-type": "application/json",
            "cache-control": "no-cache",
          }
        };

        var req = http.request(options, function (res) {
          var chunks = [];

          res.on("data", function (chunk) {
            chunks.push(chunk);
          });

          res.on("end", function () {
            var body = Buffer.concat(chunks);
            console.log(body.toString());
          });
        });

        req.write(JSON.stringify({ projectName: 'bN939DicBNPHrUUp',
          projectVersion: '1.0.0',
          logVersion: 'v2',
          body: 'This log message come from HTTP server.',
          logSource: 'http',
          logType: 'nelo2-log',
          host: '133.186.138.136' }));
        req.end();
        //--------------------------------------------------------
        break;

    case 'DELETE':
        res.render('access/testPage', { title: 'Cloud_STQA' });
        break;
  }  

});

module.exports = router;
