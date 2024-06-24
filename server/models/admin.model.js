const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    names:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required: true
    },
    nationalID:{
        type:String,
        required: true,
        unique:true
    },
    phoneNumber:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    }
})

module.exports = mongoose.model('Admin',adminSchema);