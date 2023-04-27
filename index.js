const express = require('express')
const app = express()
const router = require('./src/router/router')
const recipe = require('./src/router/recipe-menu')
const about = require('./src/router/about-menu-item')
const connection = require('./src/connection/dbconnection')
app.use(express.json())
const cors = require('cors')
app.use(
    cors({
        origin: 'http://localhost:3000'
    })
)


app.use('/user', router)
app.use('/item', recipe)
app.use('/about', about)
connection()
app.listen(5000, () => {
    console.log('Server Started');
})
module.exports = app