const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/MeanStackDb',{ useNewUrlParser: true },(err) => {
    if(!err){
        console.log("Mongodb Connection Success..!");
    }
    else{
        console.log("Error in Connection...! " + JSON.stringify(err,undefined,2));
    }
});

module.exports = mongoose;