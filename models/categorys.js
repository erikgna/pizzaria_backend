const mongoose = require('mongoose')

const categorysSchema = mongoose.Schema({
    name: String,
    isSpecial: {type: Boolean, default: false},
    complementos: Array
})

module.exports = mongoose.model("Categorys", categorysSchema)