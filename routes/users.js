var express = require('express');
var router = express.Router();

router.get('/env', function(req, res, next) {
  res.send('env');
});

router.get('/', function(req, res, next) {
  res.send('respond with a mocked resource');
});

module.exports = router;
