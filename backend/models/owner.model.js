const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ownerSchema = new Schema({
    names:{
        type:String,
        required:true
    },
    nationalId:{
        type:String,
        required:true,
        unique:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }

});

module.exports = mongoose.model('Owner', ownerSchema);