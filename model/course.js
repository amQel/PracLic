var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var courseSchema = mongoose.Schema({
       id : Number,
       teacher : String,
       courseInfo : {
           name : String,
           subject : String,
           description : String,
           costPerHour : Number
       },
       courseUsers: [ { name : String } ],
       level : String,
       
});


module.exports = mongoose.model('Course', courseSchema);
