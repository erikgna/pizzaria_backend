const fs = require('fs')

const Menus = require('../models/menus.js')
const Categorys = require('../models/categorys.js')
const Bordas = require('../models/bordas.js')
const Tamanhos = require('../models/tamanhos.js')
const Sabores = require('../models/sabores.js')
const Extras = require('../models/extra.js')

const getMenu = async (req, res) => {
    try {
        const products = await Menus.find()

        res.status(200).json(products)
    } catch (error) {
        res.status(404).json(error)
    }
}

const createProduct = async (req, res) => {
    const some = req.body
    const {name} = req.body

    try {
        const img = some.image
        var data = img.replace(/^data:image\/\w+;base64,/, "")
        var buf = Buffer.from(data, 'base64')
        var filename = Math.floor(Math.random() * (10000 - 0) + 0)
        await fs.writeFileSync(`${__dirname}/../public/images/${filename}.jpeg`, buf)

        const productExists = await Menus.findOne({name})
        if(productExists) return res.status(400).json({message: "O produto já existe!"})

        const createdProduct = await Menus.create({...some, date: new Date(), image: `https://pizzariaback.herokuapp.com/images/${filename}.jpeg`})

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


        await productExists.image.replace("https://pizzariaback.herokuapp.com/images/", "")
        //await fs.unlinkSync(`${__dirname}/../public/images/${filename}`)

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
    const data = req.body
    
    try {
        const nameExist = await Categorys.findOne({name: data.name})
        if(nameExist) return res.status(402).json('Already exists!')
        await Categorys.create(data)
        res.status(200).json('createdCategory')
    } catch (error) {
        res.status(400).json(error)
    }
}

const deleteCategory = async (req, res) => {
    const name = req.body

    try {
        const {_id} = await Categorys.findOne(name)
        if(!_id) return res.status(404).send("No category with that id")

        const categorytDeleted = await Categorys.findByIdAndRemove(_id)

        res.status(200).json(categorytDeleted)
    } catch (error) {
        res.status(400).json(error)
    }
}

const getBorda = async (req, res) => {
    try {
        const bordas = await Bordas.find()

        res.status(200).json(bordas)
    } catch (error) {
        res.status(404).json(error)
    }
}

const createBorda = async (req, res) => {
    const data = req.body

    try {
        const nameExist = await Bordas.findOne({name: data.name})
        if(data.id === '' && !nameExist) await Bordas.create(data)
        else await Bordas.findByIdAndUpdate(data.id, data)
        res.status(200).json('createdBorda')
    } catch (error) {
        res.status(400).json(error)
    }
}

const deleteBorda = async (req, res) => {
    const {id} = req.params

    try {
        const bordaDeleted = await Bordas.findByIdAndRemove(id)

        res.status(200).json(bordaDeleted)
    } catch (error) {
        res.status(400).json(error)
    }
}

const getTamanho = async (req, res) => {
    try {
        const tamanhos = await Tamanhos.find()

        res.status(200).json(tamanhos)
    } catch (error) {
        res.status(404).json(error)
    }
}

const createTamanho = async (req, res) => {
    const data = req.body
    try {
        if(data.id === '') await Tamanhos.create(data)
        else await Tamanhos.findByIdAndUpdate(data.id, data)
        res.status(200).json('createdTamanho')
    } catch (error) {
        res.status(400).json(error)
    }
}

const deleteTamanho = async (req, res) => {
    const {id} = req.params
    try {
        const tamanhoDeleted = await Tamanhos.findByIdAndRemove(id)

        res.status(200).json(tamanhoDeleted)
    } catch (error) {
        res.status(400).json(error)
    }
}

const getSabores = async (req, res) => {
    try {
        const sabores = await Sabores.find()

        res.status(200).json(sabores)
    } catch (error) {
        res.status(404).json(error)
    }
}

const createSabores = async (req, res) => {
    const data = req.body
    console.log(data)
    try {
        if(data.id === '') await Sabores.create(data)
        else await Sabores.findByIdAndUpdate(data.id, data)
        res.status(200).json('createdSabor')
    } catch (error) {
        res.status(400).json(error)
    }
}

const deleteSabores = async (req, res) => {
    const {id} = req.params

    try {
        const saboresDeleted = await Sabores.findByIdAndRemove(id)

        res.status(200).json(saboresDeleted)
    } catch (error) {
        res.status(400).json(error)
    }
}

const getExtra = async (req, res) => {
    try {
        const extras = await Extras.find()

        res.status(200).json(extras)
    } catch (error) {
        res.status(404).json(error)
    }
}

const createExtra = async (req, res) => {
    const data = req.body

    try {
        if(data.id === '') await Extras.create(data)
        else await Extras.findByIdAndUpdate(data.id, data)
        res.status(200).json('createdExtra')
    } catch (error) {
        res.status(400).json(error)
    }
}

const deleteExtra = async (req, res) => {
    const {id} = req.params

    try {
        const extraDeleted = await Extras.findByIdAndRemove(id)

        res.status(200).json(extraDeleted)
    } catch (error) {
        res.status(400).json(error)
    }
}

const editMontar = async (req, res) => {
    const {name, id} = req.params
    const {status} = req.body
    try {
        if(name === 'sabor') await Sabores.findByIdAndUpdate(id, {avaliable: status})
        if(name === 'extra') await Extras.findByIdAndUpdate(id, {avaliable: status})
        if(name === 'borda') await Bordas.findByIdAndUpdate(id, {avaliable: status})
        res.status(200).json('Edited sucessfully')
    } catch (error) {
        res.status(400).json(error)
    }
}


module.exports = {getExtra, createExtra, deleteExtra, getMenu, editMontar,
     createProduct, editProduct, deleteProduct, getCategorys, createCategory, deleteCategory, getBorda, createBorda, deleteBorda, getTamanho, createTamanho, deleteTamanho, getSabores, createSabores, deleteSabores }