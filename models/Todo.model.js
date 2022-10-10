const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
  text: String,
  completed: {
    default: false,
    type: Boolean
  },
  date: String,
})

const Todo = mongoose.model("Todo", todoSchema)
module.exports = Todo