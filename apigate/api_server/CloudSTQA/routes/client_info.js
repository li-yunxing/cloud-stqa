var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

	//Obtain client header info
	console.log(req.headers);
	
	//send client IP Address
	const ip = res.socket.remoteAddress;
	const port = res.socket.remotePort;
	console.log(ip);
	console.log(port);
	res.end('Your IP Adreess is '+ ip + ' - ' + 'your port is ' + port);
	  
	});

module.exports = router;