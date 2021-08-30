const mongoose = require('mongoose')

const saboresSchema = mongoose.Schema({
    name: String,
    categoria: String,
    ingredientes: String,
    price: {type: Number, default: 0},
    avaliable: {type: Boolean, default: true},
    categoryPrice: Number,
    special: String
})

module.exports = mongoose.model("Sabores", saboresSchema)