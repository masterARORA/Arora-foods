const express = require('express')
const aboutmenuitem = require('../business/aboutmenuitems')
const Router = express.Router()

// Router.get('/', async (req, res) => {
//     res.send("this is aboout list")
// })

Router.post('/aboutitem', async (req, res) => {
    aboutmenuitem(req, res)
})

Router.get('/aboutitem', async (req, res) => {
    aboutmenuitem.getaboutitems(req, res)
})

module.exports = Router