const mongoose =require('mongoose')


const user = new mongoose.Schema({
    fullName: {type: String, required:true},
    UserName: {type: String, required:true, unique:true},
    Password: {type: String, required:true},
})

const User =mongoose.model('User', user)
module.exports = User