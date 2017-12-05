var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('access/testPage', { title: 'Cloud_STQA' });
});

module.exports = router;
