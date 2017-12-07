var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	
	  //send cookie info
	  res.setHeader('Set-Cookie', ['type=stqa', 'language=javascript']);

	  //send client info
	  const ip = res.socket.remoteAddress;
	  const port = res.socket.remotePort;
	  console.log(ip);
	  console.log(port);
	  res.end('Your IP Adreess is '+ ip + ' - ' + 'your port is ' + port);
	  
	});

module.exports = router;