const mongoose = require('mongoose')

const subsSchema = mongoose.Schema({
    name: String,
    special: String
})

module.exports = mongoose.model("Subs", subsSchema)