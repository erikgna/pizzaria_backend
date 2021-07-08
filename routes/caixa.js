const express = require('express')

const { getCaixa, createCaixa, editCaixa, getCharts } = require('../controllers/caixa.js')

const router = express.Router()

router.get('/charts/:month', getCharts)

router.get('/', getCaixa)
router.post('/create', createCaixa)

router.patch('/update/:id', editCaixa)

module.exports = router