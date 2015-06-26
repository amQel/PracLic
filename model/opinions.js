var mongoose = require('mongoose');

var opinionSchema = mongoose.Schema({
    
       teacher : String,
       student : String,
       opinion : String
});


module.exports = mongoose.model('Opinion', opinionSchema);
