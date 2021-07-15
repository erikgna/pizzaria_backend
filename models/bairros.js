const mongoose = require('mongoose')

const bairrosSchema = mongoose.Schema({
    bairros: {type: String, require: true},
    prices: {type: Number, require: true}
})

module.exports = mongoose.model("Bairros", bairrosSchema)