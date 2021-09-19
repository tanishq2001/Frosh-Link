var express = require('express');
const mongoose = require('mongoose');
const Notes = require('../models/notes');
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
const { request } = require('express');
var axios = require('axios');
var router = express.Router();


var passport = require('passport');
const User = require('../models/user');
var authenticate = require('../authenticate');




router.post('/', passport.authenticate('local'), (req, res) => {

  var token = authenticate.getToken({_id: req.user._id});
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json({success: true, token: token, status: 'You are successfully logged in!'});
});

module.exports = router;