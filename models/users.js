const mongoose = require('mongoose')

const usersSchema = mongoose.Schema({
    admin: {type: Number, require: true},
    name: {type: String, require: true},
    cpf: {type: String, require: false},
    phone: {type: String, require: true},
    phone2: {type: String, require: true},
    email: {type: String, require: true},
    password: {type: String, require: true},
    address: {type: String, require: true},
    number: {type: String, require: true},
    complemento: {type: String, require: true},
    bairro: {type: String, require: true},
    cidade: {type: String, require: true},
    frete: Number,
    date: Date
})

module.exports = mongoose.model("Users", usersSchema)