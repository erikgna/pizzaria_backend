const Cidades = require('../models/cidades.js')

const getCidade = async (req, res) => {
    try {
        const cidades = await Cidades.find()
        res.status(200).json(cidades)
    } catch (error) {
        res.status(400).json(error)
    }
}

const createCidade = async (req, res) => {
    const data = req.body
    try {
        const editedCidade = await Cidades.create(data)

        res.status(200).json(editedCidade)
    } catch (error) {
        res.status(400).json(error)
    }
}

const deleteCidade = async (req, res) => {
    const {id} = req.params
    
    try {
        const deletedCidade = await Cidades.findByIdAndDelete(id)

        res.status(200).json(deletedCidade)
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = { getCidade, createCidade, deleteCidade }