const mongoose = require('mongoose')

const Schema = mongoose.Schema

const AboutItem = new Schema({
    item_ingrediant: Array,
    item_instruction: String
})

module.exports = mongoose.model("AboutItem", AboutItem)