var express = require('express');
var router = express.Router();

/* GET Backend Homepage. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});

/* GET Backend Homepage. */
router.get('/da', function(req, res, next) {
  // mock json data
  var data = {
    "msg": "Decent Agency HomePage"
  };
  res.json(data);
});


module.exports = router;