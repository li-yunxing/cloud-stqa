var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	
	var resp = req.query.resp;

    switch (resp) { 
    case '403':
    	// log the request and respond with 403
		res.status(403).send('Forbidden');
        break;
    case '404':
    	// log the request and respond with 404
		res.status(404).send('Not Found');
        break;
    case '406':
    	// log the request and respond with 406
		res.status(406).send('Not Acceptable');
        break;
    case '500':
    	// log the request and respond with 500
		res.status(500).send('Internal Server Error');
        break;
    case '503':
    	// log the request and respond with 503
		res.status(503).send('service Unavailable');
        break;
    }
    
});

module.exports = router;