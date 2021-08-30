const Subs = require('../models/subs.js')
const Sabores = require('../models/sabores.js')

const getSubs = async (req, res) => {
    try {
        const subs = await Subs.find()

        res.status(200).json(subs)
    } catch (error) {
        res.status(404).json(error)
    }
}

const createSubs = async (req, res) => {
    const {id, name, value} = req.body
    try {
        const nameExist = await Subs.findOne({name: name})
        if(id === '' && !nameExist) await Subs.create({name: name, value: value})
        else {
            await Subs.findByIdAndUpdate(id, {name: name, value: value})
            const sabores = await Sabores.find()
            let temp = sabores
            temp.forEach((item) => {
                if(item.categoria === name){
                    item.categoryPrice = value
                }
            })
            temp.forEach( async (item) => {
                if(item.categoria === name)
                await Sabores.findByIdAndUpdate(item._id, item)
            })
        }
        res.status(200).json('createdSub')
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