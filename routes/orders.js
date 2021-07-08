const express = require('express')

const { getOrders, createOrder, updateOrder, deleteOrder, takeFrete, editFrete, trackOrder } = require('../controllers/orders.js')

const router = express.Router()

router.get('/', getOrders)

router.get('/track/:email', trackOrder)

router.post('/create', createOrder)

router.patch('/update/:id', updateOrder)

router.get('/frete', takeFrete)
router.patch('/frete', editFrete)

router.delete('/delete/:id', deleteOrder)

module.exports = router