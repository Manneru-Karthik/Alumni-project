const mongoose = require('mongoose');
const Schema= mongoose.Schema;
const alumnimodel= require('../models/Alumnimodel');

const eventSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    Image:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        required:true,
    },
    time:{
        type:String,
        required:true,
    },
    isOnline:{
        type:Boolean,
        required:true,
    },
    creationDate:{
        type:Date,
        default:Date.now(),
    },
    location:{
        type:String,
        required: function(){
            return !this.isOnline;
        },
    },
    creator:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "alumnimodel",
        required: true,

    },
});

const Event = mongoose.model('Event', eventSchema);
module.exports=Event;