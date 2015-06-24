var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var couseSchema = mongoose.Schema({
       id : Number,
       teacher : String
});


module.exports = mongoose.model('Course', couseSchema);