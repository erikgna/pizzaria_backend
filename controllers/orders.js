const Orders = require('../models/orders.js')
const Frete = require('../models/frete.js')
const moment = require('moment')
const timezone = require('moment-timezone')

const getOrders = async (req, res) => {
    try {
        const orders = await Orders.find()
        res.status(200).json(orders)
    } catch (error) {
        res.status(400).json(error)
    }
}

const createOrder = async (req, res) => {
    const {user, cart, comment, entrega, metodo, frete, cartao, dinheiro} = req.body
    try {
        const fullAddress = `(${user.cidade} ${user.bairro}) -- ${user.address} - ${user.complemento}`
        const data = moment().format()
        var brazil = timezone.tz(data, "America/Sao_Paulo")
        
        const createdOrder = await Orders.create({
            client: user.name,
            phone: user.phone + " - " + user.phone2,
            address: fullAddress,
            email: user.email,
            cart: cart,
            date: brazil.format(),
            accept: false,
            ready: false,
            obs: comment,
            entrega: entrega,
            metodo: metodo,
            frete: frete,
               cartao,
               dinheiro
        })
        res.status(200).json(createdOrder)
    } catch (error) {
        res.status(400).json(error)
    }
}

const updateOrder = async (req, res) => {
    const data = req.body
    const {id} = req.params

    try {
        const orderExists = await Orders.findById(id)
        if(!orderExists) return res.status(400).json("Pedido não existe.")

        const updatedOrder = await Orders.findByIdAndUpdate(id, data)

        res.status(200).json(updatedOrder)
    } catch (error) {
        res.status(400).json(error)
    }
}

const deleteOrder = async (req, res) => {
    const {id} = req.params
    
    try {
        const orderExists = await Orders.findById(id)
        if(!orderExists) return res.status(400).json("Pedido não existe.")

        const deletedOrder = await Orders.findByIdAndRemove(id)

        res.status(200).json(deletedOrder)
    } catch (error) {
        res.status(400).json(error)
    }
}

const takeFrete = async (req, res) => {
    try {
        const frete = await Frete.find()
        res.status(200).json(frete)
    } catch (error) {
        res.status(400).json(error)
    }
}

const editFrete = async (req, res) => {
    const data = req.body
    const id = "60e2755a42d0012938f9290b"
    try {
        const freteUpdate = await Frete.findByIdAndUpdate(id, data)

        res.status(200).json(freteUpdate)
    } catch (error) {
        res.status(400).json(error)
    }
}

const trackOrder = async (req, res) => {
    const {email} = req.params
    const rep = email.replace(`"`, "")
    const repF = rep.replace(`"`, "")

    try {
        const data = await Orders.findOne({email: repF})

        res.status(200).json(data)
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = { getOrders, createOrder, updateOrder, deleteOrder, takeFrete, editFrete, trackOrder }