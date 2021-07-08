const mongoose = require('mongoose')

const caixaSchema = mongoose.Schema({
    initial: Number,
    isOpen: Boolean,
    total: {type: Number, default: 0},
    retiradas: {type: Number, default: 0},
    finalizados: {type: Number, default: 0},
    cancelados: {type: Number, default: 0},
    count: {type: Number, default: 0},
    motivos: Array,
    date: String
})

module.exports = mongoose.model("Caixa", caixaSchema)