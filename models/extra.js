const mongoose = require('mongoose')

const extrasSchema = mongoose.Schema({
    name: String,
    value: Number,
    avaliable: {type: Boolean, default: true},
    special: String
})

module.exports = mongoose.model("Extras", extrasSchema)