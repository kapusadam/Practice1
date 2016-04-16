var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost/cm';
/* GET users listing. */
router.get('/', function(req, res, next) {
  MongoClient.connect(url, function(err, db) {
    if(err) {
      res.send('ERROR');
      return;
    }
    var cursor = db.collection('books').find().toArray(function(err, items) {
      if(err) {
        res.send('ERROR');
        return;
      }
      res.json(items);
    });
  });
});

module.exports = router;
