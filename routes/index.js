var express = require('express');
var router = express.Router();

/* GET Backend Homepage. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});

/* GET Backend data. */
router.get('/da', function(req, res, next) {
  // mock json data
  var data = {
    "msg": "Backend Data"
  };
  res.json(data);
});

module.exports = router;