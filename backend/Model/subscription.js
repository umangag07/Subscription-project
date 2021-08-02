const mongoose = require("mongoose")

var Schema =  mongoose.Schema;

const SubscriptionSchema = new Schema({
    email:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    }


});

module.exports = mongoose.model('subscription_list', SubscriptionSchema)