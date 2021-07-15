const express = require('express')

const { getHorarios, editHorarios } = require('../controllers/horarios.js')
const funcioAuth = require('../middlewares/funcioAuth.js')

const router = express.Router()

router.get('/', getHorarios)

router.patch('/', funcioAuth, editHorarios)

module.exports = router