var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Shelby H. Haverda' });
});

// put a default route since we want to render the index everytime
router.get('*', function(req, res, next) {
  res.render('index', { title: 'Shelby H. Haverda' });
});

module.exports = router;
