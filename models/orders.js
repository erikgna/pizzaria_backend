const mongoose = require('mongoose')

const ordersSchema = mongoose.Schema({
    accept: Boolean,
    ready: Boolean,
    client: {type: String, require: true},
    phone: {type: String, require: true},
    address: {type: String, require: true},
    email: {type: String, require: true},
    titles: Array,
    description: Array,
    price: {type: Number, require: true},
    recheio: String,
    obs: String,
    entrega: String,
    metodo: String,
    prices: Array,
    date: String
})

module.exports = mongoose.model("Orders", ordersSchema)