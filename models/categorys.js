const mongoose = require('mongoose')

const categorysSchema = mongoose.Schema({
    name: String
})

module.exports = mongoose.model("Categorys", categorysSchema)