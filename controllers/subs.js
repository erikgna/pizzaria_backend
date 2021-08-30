const Subs = require('../models/subs.js')

const getSubs = async (req, res) => {
    try {
        const subs = await Subs.find()

        res.status(200).json(subs)
    } catch (error) {
        res.status(404).json(error)
    }
}

const createSubs = async (req, res) => {
    const {name, value} = req.body
    
    try {
        const createdSub = await Subs.create({name: name, value: value})
        res.status(200).json(createdSub)
    } catch (error) {
        res.status(400).json(error)
    }
}

const deleteSubs = async (req, res) => {
    const {id} = req.params

    try {
        const subDeleted = await Subs.findByIdAndRemove(id)

        res.status(200).json(subDeleted)
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = { getSubs, createSubs, deleteSubs }