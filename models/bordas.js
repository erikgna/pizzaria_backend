const mongoose = require('mongoose')

const bordasSchema = mongoose.Schema({
    name: String,
    value: Number,
    avaliable: {type: Boolean, default: true}
})

module.exports = mongoose.model("Bordas", bordasSchema)