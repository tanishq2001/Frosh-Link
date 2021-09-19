const moongoose = require('mongoose');
const Schema = moongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
    /*emailid: {
        type: String,
        unique: true
    },
    */ 
    name: {
        type: String,
        default: ''
    },     
    timestamp:   {
        type: String,
        default: ''
    }
});

User.plugin(passportLocalMongoose);
module.exports = moongoose.model('User', User);