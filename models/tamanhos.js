const mongoose = require('mongoose')

const tamanhosSchema = mongoose.Schema({
    name: String,
    value: Number,
    price: Number,
    special: String
})

module.exports = mongoose.model("Tamanhos", tamanhosSchema)