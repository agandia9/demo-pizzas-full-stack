const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

const routesPizzas = require('./routes/pizzas')
const routesPizza = require('./routes/pizza')

/* bodyParser */
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/* static folder */
app.use( express.static(path.join(__dirname,'../client')))

app.use('/pizzas', routesPizzas)
app.use('/pizza', routesPizza)

module.exports = app