const mongoose = require('mongoose')

const Schema = mongoose.Schema

const newUser = new Schema({
    user_name: String,
    password: String
})

module.exports = mongoose.model("Registration", newUser)