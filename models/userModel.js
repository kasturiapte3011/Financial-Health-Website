const mongoose = require('mongoose')

// Schema Desgin
const userSchema = new mongoose.Schema({
    // Object will be present in this block
    name:{
        type:String,
        required:[true, 'name is required..']
    },
    email:{
        type:String,
        required:[true, 'email is required and it should be unique'],
        unique: true
    },
    password:{
        type:String,
        required:[true, 'password is required']
    }

},{timestamps : true});

// Exports
// in brackets(model name , referrnce type)
const userModel = mongoose.model('users', userSchema )
module.exports = userModel