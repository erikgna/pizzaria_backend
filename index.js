const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const usersRoute = require('./routes/users.js')
const menusRoute = require('./routes/menus.js')
const ordersRoute = require('./routes/orders.js')
const caixaRoute = require('./routes/caixa.js')
const horariosRoute = require('./routes/horarios.js')
const localRoute = require('./routes/local.js')

const app = express()
dotenv.config()

app.use(bodyparser.json({limit: '30mb', extended: true}))
app.use(bodyparser.urlencoded({limit: '30mb', extended: true}))
app.use(cors())

app.get('/', (req, res) => {
    res.send('Pizzaria')
})

app.use('/users', usersRoute)
app.use('/menus', menusRoute)
app.use('/orders', ordersRoute)
app.use('/caixa', caixaRoute)
app.use('/horarios', horariosRoute)
app.use('/local', localRoute)

app.use(express.static('public'));  
app.use('/images', express.static('images')); 

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)))
    .catch((error) => console.log(error))

mongoose.set('useFindAndModify', false)