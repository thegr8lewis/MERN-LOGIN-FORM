const mongoose = require('mongoose')

const Schema = mongoose.Schema


const usersSchema = new Schema({
    name:{
        type:String,
        required: true
    },
    location:{
        type:String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    id:{
        type:Number,
        required: true
    }
},{timestamps:true})

const User = mongoose.model('user',usersSchema);

module.exports = User;