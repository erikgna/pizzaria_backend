const Subs = require('../models/subs.js')
const Sabores = require('../models/sabores.js')
const Categorys = require('../models/categorys.js')
const Menus = require('../models/menus.js')

const getSubs = async (req, res) => {
    try {
        const subs = await Subs.find()

        res.status(200).json(subs)
    } catch (error) {
        res.status(404).json(error)
    }
}

const createSubs = async (req, res) => {
    const {id, name, value} = req.body
    try {
        const nameExist = await Subs.findOne({name: name})
        if(id === '' && !nameExist) await Subs.create({name: name, value: value})
        else {
            await Subs.findByIdAndUpdate(id, {name: name, value: value})
            const sabores = await Sabores.find()
            let temp = sabores
            temp.forEach((item) => {
                if(item.categoria === name){
                    item.categoryPrice = value
                }
            })
            temp.forEach( async (item) => {
                if(item.categoria === name)
                await Sabores.findByIdAndUpdate(item._id, item)
            })
        }
        res.status(200).json('createdSub')
    } catch (error) {
        res.status(400).json(error)
    }
}

const deleteSubs = async (req, res) => {
    const {id} = req.params

    try {
        const subDeleted = await Subs.findByIdAndRemove(id)

        res.status(200).json(subDeleted)
    } catch (error) {
        res.status(400).json(error)
    }
}

const deleteComplemento = async (req, res) => {
    const {name, id} = req.params
    
    try {
        const tempCategory = await Categorys.findById(id)
        const tempArray = tempCategory.complementos

        let newArray = []
        tempArray.forEach((item) => {
            if(item.name !== name) newArray.push(item)
        })
        await Categorys.findByIdAndUpdate(id, {complementos: newArray})

        res.status(200).json(tempCategory)
    } catch (error) {
        res.status(400).json(error)
    }
}

const createComplemento = async (req, res) => {
    const {obj, id} = req.body

    try {
        const tempCategory = await Categorys.findById(id)
        const tempArray = tempCategory.complementos
        tempArray.push(obj)
        await Categorys.findByIdAndUpdate(id, {complementos: tempArray})
        res.status(200).json('created')
    } catch (error) {
        res.status(400).json(error)
    }
}

const editComplemento = async (req, res) => {
    const {obj, id} = req.body

    try {
        const tempCategory = await Categorys.findById(id)
        const tempProducts = await Menus.find()

        const tempArray = tempCategory.complementos

        let newArray = [obj]
        tempArray.forEach((item) => {
            if(item.indentifier !== obj.indentifier) {
                newArray.push(item)
            }
        })
        await Categorys.findByIdAndUpdate(id, {complementos: newArray})

        let tempComplemento = []
        tempProducts.forEach(({_id, complementos}) => {
            complementos.forEach((item) => {
                if(item[0].indentifier === obj.indentifier) tempComplemento.push({id: _id, obj: complementos})
            })
        })

        tempComplemento.forEach((thing) => {
            let tempIndex = 0
            thing.obj.forEach((item, index) => {
                if(item[0].indentifier === obj.indentifier) tempIndex = index
            })
            thing.obj.splice(tempIndex, 1)
            thing.obj.push([obj])
        })

        tempComplemento.forEach( async ({id, obj}) => {
            await Menus.findByIdAndUpdate(id, {complementos: obj})
        })

        res.status(200).json('edited')
    } catch (error) {
        res.status(400).json(error)
    }
}


module.exports = { getSubs, createSubs, deleteSubs, deleteComplemento, createComplemento, editComplemento }