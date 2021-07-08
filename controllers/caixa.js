const Caixa = require('../models/caixa.js')
const Users = require('../models/users.js')
const moment = require('moment')

const getCaixa = async (req, res) => {
    try {
        const caixas = await Caixa.find({isOpen: true})
        res.status(200).json(caixas)
    } catch (error) {
        res.status(400).json(error)
    }
}

const createCaixa = async (req, res) => {
    const {initial} = req.body
    const number = parseInt(initial)

    try {
        const createdCaixa = await Caixa.create({
            initial: number,
            isOpen: true,
            date: moment().format()
        })

        res.status(200).json(createdCaixa)
    } catch (error) {
        res.status(400).json(error)
    }
}

const editCaixa = async (req, res) => {
    const {id} = req.params
    const data = req.body
    
    try {
        const caixaExists = await Caixa.findById(id)
        if(!caixaExists) return res.status(404).send("No caixa with that id")

        const updatedCaixa = await Caixa.findByIdAndUpdate(id, data)
        res.status(200).json(updatedCaixa)
    } catch (error) {
        res.status(400).json(error)
    }
}

const getCharts = async (req, res) => {
    const {month} = req.params

    try {
        const caixa = await Caixa.find()
        const users = await (await Users.find()).length
        let soma = 0
        let pedidos = 0
        let faturaMensal = 0
        let pedidosMensal = 0
        caixa.forEach(({total, count, date}) => {
            soma = soma+total
            pedidos = pedidos+count
            if(date.substring(5, 7) === month) {
                faturaMensal = faturaMensal+total
                pedidosMensal = pedidosMensal+count
            }
        })

        const media = soma/pedidos

        const handle = {total: soma, finalizados: pedidos, ticket: media, users, faturaMensal, pedidosMensal}

        res.status(200).json(handle)
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = { getCaixa, createCaixa, editCaixa, getCharts }