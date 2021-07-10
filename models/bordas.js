const mongoose = require('mongoose')

const bordasSchema = mongoose.Schema({
    name: String,
    value: Number
})

module.exports = mongoose.model("Bordas", bordasSchema)