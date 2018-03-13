var config = require('../config');
var MongoClient = require('mongodb').MongoClient;

var db;
var collection;

MongoClient.connect(config.MONGO_URL,(err,database) => {
  if(!err){
    console.log('connection established to mongodb')
    db = database;
    collection = db.collection('users');
  }
  else{
    console.console.log('connection established to mongodb');
  }

})
