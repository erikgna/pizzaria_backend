const express = require('express')

const { getCidade, createCidade, deleteCidade } = require('../controllers/cidades.js')
const { getBairro, createBairro, deleteBairro } = require('../controllers/bairros.js')
const adminAuth = require('../middlewares/adminAuth.js')

const router = express.Router()

router.get('/cidade', getCidade)
router.post('/cidade', adminAuth, createCidade)
router.delete('/cidade/:id', adminAuth, deleteCidade)

router.get('/bairro', getBairro)
router.post('/bairro', adminAuth, createBairro)
router.delete('/bairro/:id', adminAuth, deleteBairro)

module.exports = router