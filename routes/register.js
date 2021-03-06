var express = require('express');
var router = express.Router();


var passport = require('passport');
const User = require('../models/user');
var authenticate = require('../authenticate');
/* GET users listing. */
router.post('/', (req, res, next) => {
  
  User.register(new User({username: req.body.username}), 
    req.body.password, (err, user) => {
     
    if(err) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.json({err: err});
    }
    else {
      passport.authenticate('local')(req, res, () => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({success: true, status: 'Registration Successful!'});
      });
    }
  });
});


module.exports = router;
