const express = require('express')

const { getMenu, createProduct, editProduct, deleteProduct, getCategorys, createCategory, deleteCategory, getBorda, createBorda, deleteBorda } = require('../controllers/menus.js')
const adminAuth = require('../middlewares/adminAuth.js')
const funcioAuth = require('../middlewares/funcioAuth.js')

const router = express.Router()

router.get('/', getMenu)
router.post('/create', adminAuth, createProduct)

router.get('/category', getCategorys)
router.post('/category', adminAuth, createCategory)

router.get('/borda', getBorda)
router.post('/borda', funcioAuth, createBorda)

router.patch('/update/:id', adminAuth, editProduct)

router.delete('/delete/:id', adminAuth, deleteProduct)
router.post('/delete/category', adminAuth, deleteCategory)
router.delete('/borda/:id', funcioAuth, deleteBorda)

module.exports = router