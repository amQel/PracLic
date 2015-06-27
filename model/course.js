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
       news : [ {tittle : String, message : String} ],
       files : [ {data: Buffer, contentType: String} ]
});


module.exports = mongoose.model('Course', courseSchema);
