const express = require('express')

const { getMotoboy, createMotoboy, deleteMotoboy, editMotoboy, remakeMotoboy, editMotoboyInfo } = require('../controllers/motoboy.js')
const adminAuth = require('../middlewares/adminAuth.js')
const funcioAuth = require('../middlewares/funcioAuth.js')

const router = express.Router()

router.get('/', funcioAuth, getMotoboy)
router.patch('/:id', funcioAuth, editMotoboy)
router.get('/remake', funcioAuth, remakeMotoboy)
router.post('/',  adminAuth, createMotoboy)
router.delete('/:id', adminAuth, deleteMotoboy)
router.post('/info', adminAuth, editMotoboyInfo)

module.exports = router