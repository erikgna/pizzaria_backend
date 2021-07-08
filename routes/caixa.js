const express = require('express')

const { getCaixa, createCaixa, editCaixa, getCharts } = require('../controllers/caixa.js')
const adminAuth = require('../middlewares/adminAuth.js')
const funcioAuth = require('../middlewares/funcioAuth.js')

const router = express.Router()

router.get('/charts/:month', adminAuth, getCharts)

router.get('/', funcioAuth, getCaixa)
router.post('/create', funcioAuth, createCaixa)

router.patch('/update/:id', funcioAuth, editCaixa)

module.exports = router