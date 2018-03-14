var config = require('../config');
var MongoClient = require('mongodb').MongoClient;

var db;
var collection;

MongoClient.connect(config.MONGO_URL,(err,database) => {
  if(!err){
    console.log('connection established to mongodb')
    db = database;
    Collection = db.collection('users');
  }
  else{
    console.log('not possible to established the connection  to mongodb');
  }
});

module.export = {
  register: function(data,handler){
      Collection.insertOne(data,function(err,result){
        handler(err,result);
      })
  }
}
