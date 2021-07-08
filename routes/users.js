const express = require('express')

const { getUsers, signup, signin, editUser, deleteUser } = require('../controllers/users.js')
const adminAuth = require('../middlewares/adminAuth.js')

const router = express.Router()

router.get('/', adminAuth, getUsers)

router.post('/signup', signup)
router.post('/signin', signin)

router.patch('/update/:id', adminAuth, editUser)
router.delete('/delete/:id', adminAuth, deleteUser)

module.exports = router