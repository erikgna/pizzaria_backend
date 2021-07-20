const mongoose = require('mongoose')

const motoboysSchema = mongoose.Schema({
    name: String,
    phone: String,
    placa: String,
    entregas: {type: Number, default: 0},
    total: {type: Number, default: 0},
    entregasTemp: {type: Number, default: 0},
    totalTemp: {type: Number, default: 0}
})

module.exports = mongoose.model("Motoboys", motoboysSchema)