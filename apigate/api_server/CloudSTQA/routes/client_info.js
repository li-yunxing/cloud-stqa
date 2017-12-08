var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

	//Obtain client header info
	console.log(req.headers);
	
	//send remote IP Address
	const ip = res.socket.remoteAddress;
	const port = res.socket.remotePort;
	console.log(ip);
	console.log(port);
	res.end('Your IP Adreess is '+ ip + ' - ' + 'your port is ' + port);
	
	//send x-forwarded IP Address
	var client_IP = req.header('x-forwarded-for');
	console.log(client_IP);

	});

module.exports = router;