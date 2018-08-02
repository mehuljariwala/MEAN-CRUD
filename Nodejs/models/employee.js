const mongoose = require('mongoose');

var Employee = mongoose.model('Employee',{
    name : {type : String},
    age : {type :  Number},
    office : {type : String},
    salary : {type : Number},
},'employees');


module.exports = {Employee};