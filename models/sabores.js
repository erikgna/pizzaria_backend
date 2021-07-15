const mongoose = require('mongoose')

const saboresSchema = mongoose.Schema({
    name: String
})

module.exports = mongoose.model("Sabores", saboresSchema)