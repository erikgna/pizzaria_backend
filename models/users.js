const mongoose = require('mongoose')

const usersSchema = mongoose.Schema({
    admin: {type: Number, require: true},
    name: {type: String, require: true},
    phone: {type: String, require: true},
    email: {type: String, require: true},
    password: {type: String, require: true}
})

module.exports = mongoose.model("Users", usersSchema)