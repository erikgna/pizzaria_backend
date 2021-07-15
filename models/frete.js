const mongoose = require('mongoose')

const freteSchema = mongoose.Schema({
    retirada: String,
    entrega: String
})

module.exports = mongoose.model("Frete", freteSchema)