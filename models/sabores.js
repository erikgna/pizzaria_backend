const mongoose = require('mongoose')

const saboresSchema = mongoose.Schema({
    name: String,
    categoria: String,
    ingredientes: String
})

module.exports = mongoose.model("Sabores", saboresSchema)