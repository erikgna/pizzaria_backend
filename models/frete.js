const mongoose = require('mongoose')

const freteSchema = mongoose.Schema({
    price: Number,
    retirada: String,
    entrega: String
})

module.exports = mongoose.model("Frete", freteSchema)