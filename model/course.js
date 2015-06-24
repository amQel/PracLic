var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var couseSchema = mongoose.Schema({
       id : Number,
       teacher : String,
       courseInfo : {
           name : String,
           subject : String,
           description : String
       },
       courseUsers: [ { name : String } ]
});


module.exports = mongoose.model('Course', couseSchema);
