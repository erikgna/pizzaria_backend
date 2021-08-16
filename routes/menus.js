const express = require('express')

const { getMenu, createProduct, editProduct, deleteProduct, getCategorys, createCategory, deleteCategory, getBorda, createBorda, deleteBorda, getTamanho, createTamanho, deleteTamanho, getSabores, createSabores, deleteSabores, getExtra, createExtra, deleteExtra, editMontar } = require('../controllers/menus.js')
const { getSubs, createSubs, deleteSubs } = require('../controllers/subs.js')
const adminAuth = require('../middlewares/adminAuth.js')

const router = express.Router()

router.get('/', getMenu)
router.post('/create', adminAuth, createProduct)

router.get('/category', getCategorys)
router.post('/category', adminAuth, createCategory)

router.get('/borda', getBorda)
router.post('/borda', adminAuth, createBorda)

router.patch('/update/:id', adminAuth, editProduct)

router.delete('/delete/:id', adminAuth, deleteProduct)
router.post('/delete/category', adminAuth, deleteCategory)
router.delete('/borda/:id', adminAuth, deleteBorda)

router.get('/tamanho', getTamanho)
router.post('/tamanho', adminAuth, createTamanho)
router.delete('/tamanho/:id', adminAuth, deleteTamanho)

router.get('/sabor', getSabores)
router.post('/sabor', adminAuth, createSabores)
router.delete('/sabor/:id', adminAuth, deleteSabores)

router.get('/sub', getSubs)
router.post('/sub', adminAuth, createSubs)
router.delete('/sub/:id', adminAuth, deleteSubs)

router.get('/extra', getExtra)
router.post('/extra', adminAuth, createExtra)
router.delete('/extra/:id', adminAuth, deleteExtra)

router.post('/montar/:name/:id', adminAuth, editMontar)

module.exports = router