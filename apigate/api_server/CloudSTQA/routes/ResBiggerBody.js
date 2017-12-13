var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	
	var size = req.query.size;
	var stringBigData = "";
	
	for(var i=0; i<size; i++){
		stringBigData += "This is a list of Hypertext Transfer Protocol (HTTP) response status codes.";
	}
	
	res.format({
		  json: function(){
		    res.send({ message:stringBigData});
		  }
	});
	
});

module.exports = router;