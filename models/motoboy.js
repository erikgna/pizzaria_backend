const mongoose = require('mongoose')

const motoboysSchema = mongoose.Schema({
    name: String,
    phone: String,
    placa: String,
    entregas: {type: Number, default: 0},
    total: {type: Number, default: 0},
    entregasTemp: {type: Number, default: 0},
    totalTemp: {type: Number, default: 0},
    rendimentos: {type: Object, default: {
        entregas: [
            {
                count: 0,
                date: ''
            }
        ],
        dinheiro: [
            {
                price: 0,
                date: ''
            }
        ]
    }}
})

module.exports = mongoose.model("Motoboys", motoboysSchema)