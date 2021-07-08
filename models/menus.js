const mongoose = require('mongoose')

const menusSchema = mongoose.Schema({
    name: {type: String, require: true},
    description: {type: String, require: true},
    category: {type: String, require: true},
    price: {type: Number, require: true},
    image: {type: String, require: true},
    avaliable: {type: Boolean, require: true},
    type: {type: String, require: true},
    combo: {type: Boolean, require: true},
    date: Date
})

module.exports = mongoose.model("Menus", menusSchema)