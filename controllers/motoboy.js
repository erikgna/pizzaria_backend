const moment = require('moment')
const timezone = require('moment-timezone')

const Motoboys = require('../models/motoboy.js')

const getMotoboy = async (req, res) => {
    try {
        const motoboys = await Motoboys.find()
        res.status(200).json(motoboys)
    } catch (error) {
        res.status(400).json(error)
    }
}

const remakeMotoboy = async (req, res) => {
    try {
        const motoboys = await Motoboys.find()

        let newMotoboys = {totalTemp: 0, entregasTemp: 0}
        const data = moment().format()
        var brazil = timezone.tz(data, "America/Sao_Paulo")

        motoboys.forEach( async ({_id, rendimentos, totalTemp, entregasTemp}) => {
            const countTemp = {count: entregasTemp, date: brazil.format()}
            const moneyTemp = {price: totalTemp, date: brazil.format()}
            rendimentos.entregas.push(countTemp)
            rendimentos.dinheiro.push(moneyTemp)

            await Motoboys.findByIdAndUpdate(_id, {newMotoboys, rendimentos})
        })

        res.status(200).json(motoboys)
    } catch (error) {
        res.status(400).json(error)
    }
}

const editMotoboy = async (req, res) => {
    const {price} = req.body
    const {id} = req.params
    try {
        const editMotoboy = await Motoboys.findById(id)

        const total = editMotoboy?.total + price
        const totalTemp = editMotoboy?.totalTemp + price

        const entregas = editMotoboy?.entregas + 1
        const entregasTemp = editMotoboy?.entregasTemp + 1

        const editedMotoboy = await Motoboys.findByIdAndUpdate(id, {entregas, entregasTemp, total, totalTemp})
        res.status(200).json(editedMotoboy)
    } catch (error) {
        res.status(400).json(error)
    }
}

const createMotoboy = async (req, res) => {
    const data = req.body
    try {
        const createdMotoboy = await Motoboys.create(data)

        res.status(200).json(createdMotoboy)
    } catch (error) {
        res.status(400).json(error)
    }
}

const deleteMotoboy = async (req, res) => {
    const {id} = req.params

    try {
        const deletedMotoboy = await Motoboys.findByIdAndDelete(id)

        res.status(200).json(deletedMotoboy)
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = { getMotoboy, createMotoboy, deleteMotoboy, editMotoboy, remakeMotoboy }