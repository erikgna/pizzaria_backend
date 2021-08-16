const mongoose = require('mongoose')

const saboresSchema = mongoose.Schema({
    name: String,
    categoria: String,
    ingredientes: String,
    avaliable: {type: Boolean, default: true}
})

module.exports = mongoose.model("Sabores", saboresSchema)