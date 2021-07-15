const mongoose = require('mongoose')

const cidadesSchema = mongoose.Schema({
    cidades: {type: String, require: true}
})

module.exports = mongoose.model("Cidades", cidadesSchema)