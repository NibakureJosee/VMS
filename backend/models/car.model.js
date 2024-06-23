const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carSchema = new Schema({
    model:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    plate:{
        type:String,
        required:true
    },
    year:{
        type:String,
        required:true
    },
    chasingNumber:{
        type:String,
        required:true
    },
    ownerId:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Car', carSchema);