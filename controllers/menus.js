const Menus = require('../models/menus.js')
const Categorys = require('../models/categorys.js')

const getMenu = async (req, res) => {
    try {
        const products = await Menus.find()

        res.status(200).json(products)
    } catch (error) {
        res.status(404).json(error)
    }
}

const createProduct = async (req, res) => {
    const data = req.body
    const {name} = req.body

    try {
        const productExists = await Menus.findOne({name})
        if(productExists) return res.status(400).json({message: "O produto já existe!"})

        const createdProduct = await Menus.create({...data, date: new Date()})

        res.status(200).json(createdProduct)
    } catch (error) {
        res.status(400).json(error)
    }
}

const editProduct = async (req, res) => {
    const {id} = req.params
    const data = req.body

    try {
        const productExists = await Menus.findById(id)
        if(!productExists) return res.status(404).send("No product with that id")

        const updatedProduct = await Menus.findByIdAndUpdate(id, data)
        res.status(200).json(updatedProduct)
    } catch (error) {
        res.status(400).json(error)
    }
}

const deleteProduct = async (req, res) => {
    const {id} = req.params

    try {
        const productExists = await Menus.findById(id)
        if(!productExists) return res.status(404).send("No product with that id")

        const productDeleted = await Menus.findByIdAndRemove(id)

        res.status(200).json(productDeleted)
    } catch (error) {
        res.status(400).json(error)
    }
}

const getCategorys = async (req, res) => {
    try {
        const categorys = await Categorys.find()

        res.status(200).json(categorys)
    } catch (error) {
        res.status(404).json(error)
    }
}

const createCategory = async (req, res) => {
    const name = req.body

    try {
        const createdCategory = await Categorys.create(name)
        res.status(200).json(createdCategory)
    } catch (error) {
        res.status(400).json(error)
    }
}

const deleteCategory = async (req, res) => {
    const name = req.body

    try {
        const {_id} = await Categorys.findOne(name)
        if(!_id) return res.status(404).send("No product with that id")

        const categorytDeleted = await Categorys.findByIdAndRemove(_id)

        res.status(200).json(categorytDeleted)
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = { getMenu, createProduct, editProduct, deleteProduct, getCategorys, createCategory, deleteCategory }