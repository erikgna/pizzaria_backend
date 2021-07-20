const express = require('express')

const { getOrders, createOrder, updateOrder, deleteOrder, takeFrete, editFrete, trackOrder } = require('../controllers/orders.js')
const funcioAuth = require('../middlewares/funcioAuth.js')

const router = express.Router()

router.get('/', getOrders)

router.get('/track/:email', trackOrder)

router.post('/create', createOrder)

router.patch('/update/:id', updateOrder)

router.get('/frete', takeFrete)
router.patch('/frete', funcioAuth, editFrete)

router.delete('/delete/:id', funcioAuth, deleteOrder)

module.exports = router