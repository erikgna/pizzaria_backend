const express = require('express')

const { getUsers, signup, signin, editUser, deleteUser } = require('../controllers/users.js')

const router = express.Router()

router.get('/', getUsers)

router.post('/signup', signup)
router.post('/signin', signin)

router.patch('/update/:id', editUser)
router.delete('/delete/:id', deleteUser)

module.exports = router