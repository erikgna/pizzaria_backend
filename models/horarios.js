const mongoose = require('mongoose')

const horariosSchema = mongoose.Schema({
    openSeg: String,
    closeSeg: String,
    openTer: String,
    closeTer: String,
    openQua: String,
    closeQua: String,
    openQui: String,
    closeQui: String,
    openSex: String,
    closeSex: String,
    openSab: String,
    closeSab: String,
    openDom: String,
    closeDom: String
})

module.exports = mongoose.model("Horarios", horariosSchema)