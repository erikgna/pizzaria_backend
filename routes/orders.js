const express = require('express')

const { getOrders, createOrder, updateOrder, deleteOrder, takeFrete, editFrete, trackOrder } = require('../controllers/orders.js')
const userAuth = require('../middlewares/userAuth.js')
const adminAuth = require('../middlewares/adminAuth.js')
const funcioAuth = require('../middlewares/funcioAuth.js')

const router = express.Router()

router.get('/', funcioAuth, getOrders)

router.get('/track/:email', userAuth, trackOrder)

router.post('/create', userAuth, createOrder)

router.patch('/update/:id', funcioAuth, updateOrder)

router.get('/frete', takeFrete)
router.patch('/frete', funcioAuth, editFrete)

router.delete('/delete/:id', funcioAuth, deleteOrder)

module.exports = router