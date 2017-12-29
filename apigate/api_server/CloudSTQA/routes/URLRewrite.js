var express = require('express');
var router = express.Router();

/* GET home page. */
router.use('/', function(req, res, next) {

  switch (req.method) { 

    case 'GET':
        res.render('access/result', { title: 'Cloud_STQA' });      	
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