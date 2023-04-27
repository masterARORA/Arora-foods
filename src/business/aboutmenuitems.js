const aboutItem = require('../model/aboutItems')

const aboutmenuitem = async (req, res) => {
    console.log("aboutmenuitem----");
    try {
        const items = new aboutItem({
            item_ingrediant: req.body.item_ingrediant,
            item_instruction: req.body.item_instruction
        })
        const aboutlist = await items.save()
        res.send(aboutlist)
    } catch (error) {
        console.log(error);
    }
}

const getaboutitems = async (req, res) => {
    try {
        const item = await aboutItem.find()
        res.send(item)
    } catch (error) {
        console.log(error);
    }
}

module.exports = { aboutmenuitem, getaboutitems }
