var express = require('express');
var router = express.Router();
var db = require('../db')

/* GET users listing. */
router.post('/register', function(req, res, next) {
  const {name,email,password} = req.body.userData;
  const dataToInsert = {
    name,
    email,
    password
  }

  res.json(dataToInsert)
});

module.exports = router;
