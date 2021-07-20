const mongoose = require('mongoose')

const ordersSchema = mongoose.Schema({
    accept: Boolean,
    ready: Boolean,
    client: {type: String, require: true},
    phone: {type: String, require: true},
    address: {type: String, require: true},
    email: {type: String, require: true},
    cart: Array,
    obs: String,
    entrega: String,
    metodo: String,
    frete: Number,
    cartao: Object,
    dinheiro: Number,
    moto: String,
    date: String
})

module.exports = mongoose.model("Orders", ordersSchema)