const mongoose = require('mongoose')

const extrasSchema = mongoose.Schema({
    name: String,
    value: Number
})

module.exports = mongoose.model("Extras", extrasSchema)