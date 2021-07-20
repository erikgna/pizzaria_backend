const Bairros = require('../models/bairros.js')

const getBairro = async (req, res) => {
    try {
        const bairros = await Bairros.find()
        res.status(200).json(bairros)
    } catch (error) {
        res.status(400).json(error)
    }
}

const createBairro = async (req, res) => {
    const data = req.body
    try {
        const editedBairro = await Bairros.create(data)

        res.status(200).json(editedBairro)
    } catch (error) {
        res.status(400).json(error)
    }
}

const deleteBairro = async (req, res) => {
    const {id} = req.params

    try {
        const deletedBairro = await Bairros.findByIdAndDelete(id)

        res.status(200).json(deletedBairro)
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = { getBairro, createBairro, deleteBairro }