  var express = require('express');
var router = express.Router();
var db = require('../db2')

/* GET users listing. */
router.post('/register', function(req, res, next) {
  const {name,email,password} = req.body.userData;
  const dataToInsert = {
    name,
    email,
    password
  }
  res.json(dataToInsert);
  //
  // const handler = function(err,result){
  //   if(!err){
  //     res.json({
  //       sucess: true,
  //       message: 'User Registered',
  //       data: result
  //     });
  //   }
  //   else{
  //     res.json({
  //       sucess: false,
  //       message: 'Not user Registered',
  //       error: err
  //     });
  //   }
  // }
  // db.register(dataToInsert,handler);
});

module.exports = router;
