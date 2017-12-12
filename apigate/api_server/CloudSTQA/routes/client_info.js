var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

	//Obtain client header info
	console.log(req.headers);
	
	//send remote IP Address
	const ip = res.socket.remoteAddress;
	const port = res.socket.remotePort;
	
	//send x-forwarded IP Address
	var client_IP = req.header('x-forwarded-for');
	
	res.send('Your remote IP Adreess is '+ ip + ' - ' + 'port is ' + port + '; ' + 'Your x-forwarded IP Adreess is '+ client_IP);

	});

module.exports = router;