var config = require('../config');
//var MongoClient = require('mongodb').MongoClient;

const mongoose = require('mongoose');
mongoose.connect(config.MONGO_URL,function(err,database){
  if(!err){
    const Cat = mongoose.model('Cat', { name: String });
    const kitty = new Cat({ name: 'Zildjian' });
    kitty.save().then(() => console.log('meow'));
  }
  else{
    console.log("Não deu Certo");
  }
});

// const Cat = mongoose.model('Cat', { name: String });
//
// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));
//
//
// var db;
// var collection;
//
// MongoClient.connect(config.MONGO_URL,(err,database) => {
//   if(!err){
//     console.log('connection established to mongodb')
//     db = database;
//     Collection = db.collection('users');
//   }
//   else{
//     console.log('not possible to established the connection  to mongodb');
//   }
// });
//
// module.export = {
//   register: function(data,handler){
//       Collection.insertOne(data,function(err,result){
//         handler(err,result);
//       })
//   }
// }
