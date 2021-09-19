var express = require('express');
const mongoose = require('mongoose');
var noterouter = express.Router();
const Notes = require('../models/notes');
var authenticate = require('../authenticate');
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
const { request } = require('express');
const { compile } = require('jade');

noterouter.route('/')
.post(authenticate.verifyUser,(req, res, next) => {
    var xx = req.body.page;
    console.log(xx);
    Notes.find({})   
    .then((Note) => {
        var test=[];
        var count=0;
        for(var i=(xx-1)*10;i<xx*10;i++){
            test[count]=Note[i];
            count++;
        }
      //  console.log('jobs processed ', Note);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(test);
    }, (err) => next(err))
    .catch((err) => next(err));
});

module.exports = noterouter;


