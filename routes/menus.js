const express = require('express')

const { getMenu, createProduct, editProduct, deleteProduct, getCategorys, createCategory, deleteCategory } = require('../controllers/menus.js')

const router = express.Router()

router.get('/', getMenu)
router.post('/create', createProduct)

router.get('/category', getCategorys)
router.post('/category', createCategory)

router.patch('/update/:id', editProduct)

router.delete('/delete/:id', deleteProduct)
router.post('/delete/category', deleteCategory)

module.exports = router