const mongoose = require('mongoose')

const Schema = mongoose.Schema

const HomeMenuItem = new Schema({
    item_name: String
})

module.exports = mongoose.model('HomeMenuItem', HomeMenuItem)