const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1:27017/user-details'

function connection() {
    mongoose.connect(url, { useNewUrlParser: true })
    console.log("Connected..........................");
}

module.exports = connection