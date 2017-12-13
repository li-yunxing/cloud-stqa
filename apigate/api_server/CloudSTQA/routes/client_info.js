var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

	//Obtain client header info
	var stringHeader = "";
	
	for(var key in req.headers){
		stringHeader += key +":" + req.headers[key] + "\n";
	}
	
	//send remote IP Address
	const ip = res.socket.remoteAddress;
	const port = res.socket.remotePort;
	
	//send x-forwarded IP Address
	var client_IP = req.header('x-forwarded-for');
	
	//output client info with Text file
	res.format({
		  text: function(){
				res.send('Your remote IP Adreess is '+ ip + ' - ' + 'port is ' + port + '\n\n' + 'Your x-forwarded IP Adreess is '+ client_IP + '\n\n' + stringHeader);
		  }
	
		});

	});

module.exports = router;