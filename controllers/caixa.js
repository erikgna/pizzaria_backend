const Caixa = require('../models/caixa.js')
const moment = require('moment')
const timezone = require('moment-timezone')

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
        const data = moment().format()
        var brazil = timezone.tz(data, "America/Sao_Paulo")

        const createdCaixa = await Caixa.create({
            initial: number,
            isOpen: true,
            date: brazil.format()
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
        const inicio = parseInt(month.split(',')[0])
        const final = parseInt(month.split(',')[1])
        const caixa = await Caixa.find()
        let soma = 0
        let pedidos = 0
        let faturaMensal = 0
        let pedidosMensal = 0
        caixa.forEach(({total, count, date}) => {
            soma = soma+total
            pedidos = pedidos+count
            if(inicio < Date.parse(date) && final > Date.parse(date)) {
                faturaMensal = faturaMensal+total
                pedidosMensal = pedidosMensal+count
            }
        })

        const media = (soma/pedidos).toFixed(2)

        const handle = {total: soma, finalizados: pedidos, ticket: media, faturaMensal, pedidosMensal}

        res.status(200).json(handle)
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = { getCaixa, createCaixa, editCaixa, getCharts }