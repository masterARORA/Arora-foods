const express = require('express')
const menuitem = require('../business/homeitem')

const Router = express.Router()

Router.get('/', async (req, res) => {
    try {
        console.log("insie router");
        res.send("this is recipe item")
    } catch (error) {
        console.log(error);
    }

})

Router.post('/menuitem', async (req, res) => {
    // menuitem.menuitem(req, res)
    menuitem(req, res)
})

Router.get('/menuitem', async (req, res) => {
    // GetMenuItems(req, res)
    menuitem.GetMenuItems(req, res)
})
module.exports = Router