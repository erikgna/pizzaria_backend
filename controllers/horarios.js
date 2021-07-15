const Horarios = require('../models/horarios.js')

const getHorarios = async (req, res) => {
    try {
        const horarios = await Horarios.find()
        res.status(200).json(horarios)
    } catch (error) {
        res.status(400).json(error)
    }
}

const editHorarios = async (req, res) => {
    const data = req.body
    const id = "60ee048c8d73c881ce674c0c"
    
    try {
        const editedHorario = await Horarios.findByIdAndUpdate(id, data)

        res.status(200).json(editedHorario)
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = { getHorarios, editHorarios }