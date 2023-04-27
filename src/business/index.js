const registration = require('../model/schema')
const jwt = require("jsonwebtoken");
const dotenv = require('dotenv')
dotenv.config()
const tokenGenerator = async (user) => {
    return new Promise((resolve, reject) => {
        const payload = { user: user.user_name }
        const secretKey = "secretKey@123"
        const option = { expiresIn: "1d" }
        jwt.sign(payload, secretKey, option, (err, token) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(token)
            }
        })
    })
}
const signUp = async (req, res) => {
    const newUser = new registration({
        user_name: req.body.user_name,
        password: req.body.password
    })
    const user = await newUser.save()
    // jwt.sign(newUser, secretKey, { expiresIn: "1d" }, async (error, token) => {
    //     console.log("token---", token)
    //     if (error) res.send({ error })
    //     res.send({
    //         user, token
    //     })
    // })

    // console.log("token---", token);
    res.send(user)
}

const Login = async (req, res) => {
    // const user_name = req.body.user_name
    // const password = req.body.password
    // const params = new Registration({
    //     user_name: user_name,
    //     password: password
    // })
    // const user = await params.save()
    // const token = await tokenGenerator(user)
    // try {
    //     const input = await user.save()
    //     res.json(input, token)
    // } catch (error) {
    //     res.send('Err' + error)
    // }
    const user_name = req.body.user_name
    const password = req.body.password
    const userExist = await registration.findOne({ user_name: user_name, password: password })
    if (userExist) {
        const token = await tokenGenerator(userExist)
        // console.log(userExist.schema.tree.user_name)
        return res.send({ token, userExist })
    }
    else {
        return res.send("Invalid username and password.....")
    }
}

const Verify = async (req, res) => {
    try {
        const token = req.header.accesstoken
        const verify = jwt.verify(token, process.env.SECRET_KEY)
        if (verify) {
            return res.send("Successfully Verified");
        } else {
            // Access Denied
            return res.send("Invalid User......");
        }
    } catch (error) {
        return res.status(401).send(error);
    }
}

module.exports = { signUp, Login, Verify }
// module.exports = Login



