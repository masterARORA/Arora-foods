const express = require('express')
const business = require('../business/index')
//const Login = require('../business/index')
const Router = express.Router()
// const jwt = require("jsonwebtoken");
Router.get('/', async (req, res) => {
    console.log("insie router");
    res.send("HII Im ankit")
})

Router.post('/signUp', async (req, res) => {
    business.signUp(req, res)
})

Router.post('/login', async (req, res) => {
    business.Login(req, res)
})

Router.get('/login/verification', async (req, res) => {
    business.Verify(req, res)
})

module.exports = Router