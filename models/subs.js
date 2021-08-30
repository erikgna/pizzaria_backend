const mongoose = require('mongoose')

const subsSchema = mongoose.Schema({
    name: String,
    value: Number,
    special: String
})

module.exports = mongoose.model("Subs", subsSchema)