var express = require('express')
var router =  express.Router();

//config
const config = require('../config')
//jwt
var jwt = require('jsonwebtoken');
/**
*Receid email and passoword
*Find user
*generate token
*/

router.post('/login',function(req,res,next){
  const {email, password} = req.body.userData;

  if( email === undefined || password === undefined){
    res.status(401).json({
        sucess: false,
        code: 'DD101_API_ERROR',
        message: "Email ou Passord invalid"
    });
  }
  //usando o id ficticio do usuario
  //o ideal é o que o payload do usuario traga as informações nescessarias
  else {
    let tokenData = {
      id: 101
    }
    //ele precisa de uma senha pra assinar e uma expiração de no maximo 1 minuto
    let generatedToken = jwt.sign(tokenData, config.JWT_KEY,{expiresIn: '1m'});
    res.json({
      sucess: true,
      token: generatedToken
    })
  }
});

module.exports = router;
