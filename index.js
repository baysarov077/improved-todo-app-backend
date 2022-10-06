const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(require('./routes/todos.route'))

mongoose.connect(process.env.CONNECT_URL, () => {
  console.log('Успешное соединение')
})

app.listen(process.env.PORT, () => {
  console.log('...Соединение с ' + process.env.PORT)
})
