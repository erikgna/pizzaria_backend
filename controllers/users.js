const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const Users = require('../models/users.js')

const getUsers = async (req, res) => {
    try {
        const users = await Users.find()

        res.status(200).json(users)
    } catch (error) {
        res.status(400).json(error)
    }
}

const signup = async (req, res) => {
    const data = req.body
    const {email} = req.body

    try {
        const userExists = await Users.findOne({email: email})
        if(userExists) return res.status(400).json({message: "User already exists."})

        const hashedPassword = await bcrypt.hash(data.password, 12)
        const result = await Users.create({...data, password: hashedPassword, date: new Date()})

        const token = jwt.sign({admin: result.admin}, 'hashed', {expiresIn: "24h"})

        res.status(200).json({result: result, token})
    } catch (error) {
        res.status(400).json(error)
    }
}

const signin = async (req, res) => {
    const {email, password} = req.body

    try {
        const userExists = await Users.findOne({email})

        if(!userExists) return res.status(404).json({message: "User doesn't exist!"})

        const isPasswordCorrect = await bcrypt.compare(password, userExists.password)

        if(!isPasswordCorrect) return res.status(404).json({message: "Password incorrect!"})

        const token = jwt.sign({admin: userExists.admin}, 'hashed', {expiresIn: '24h'})
        res.status(200).json({result: userExists, token})
    } catch (error) {
        res.status(400).json(error)
    }
}

const editUser = async (req, res) => {
    const {id} = req.params
    const data = req.body

    try {
        const userExists = await Users.findById(id)
        if(!userExists) return res.status(404).send("No user with that id")

        const updatedUser = await Users.findByIdAndUpdate(id, data)

        res.status(200).json(updatedUser)
    } catch (error) {
        res.status(400).json(error)
    }
}

const deleteUser = async (req, res) => {
    const {id} = req.params

    try {
        const userExists = await Users.findById(id)
        if(!userExists) return res.status(404).send("No user with that id")

        const userDeleted = await Users.findByIdAndRemove(id)

        res.status(200).json(userDeleted)
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = { getUsers, signup, signin, editUser, deleteUser }