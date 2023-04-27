const ItemList = require('../model/HomeItemSchema')

const MenuItem = async (req, res) => {
    console.log("Inside logic---");
    const newItem = new ItemList({
        item_name: req.body.item_name

    })
    const items = await newItem.save()
    console.log("items---", items);
    res.send(items)
}
// exports.MenuItem = async (req, res) => {
//     console.log("Inside logic---");
//     const newItem = new ItemList({
//         item_name: req.body.item_name
//     })
//     const items = await newItem.save()
//     console.log("items---", items);
//     res.send(items)
// }

const GetMenuItems = async (req, res) => {
    try {
        const items = await ItemList.find()
        res.send(items)
    } catch (error) {
        console.log(error);
    }
}

module.exports = { MenuItem, GetMenuItems }