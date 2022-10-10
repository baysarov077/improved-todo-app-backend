const Todo = require("../models/Todo.model");

module.exports.todosController = {
  getTodo: async (req, res) => {
    try {
      const todos = await Todo.find();
      res.json(todos);
    } catch (error) {
      res.json(error + "getTodo");
    }
  },
  addTodo: async (req, res) => {
    try {
      const todos = await Todo.create({
        text: req.body.text,
        date: new Date()
      });
      res.json(todos);
    } catch (error) {
      res.json(error + "addTodo");
    }
  },
  deleteTodo: async (req, res) => {
    try {
      const todo = await Todo.findByIdAndDelete(req.params.id);
      res.json(todo);
    } catch (error) {
      console.log(error + "deleteTodo");
    }
  },
  patchTodo: async (req, res) => {
    try {
      const todo = await Todo.findByIdAndUpdate(req.params.id, {
        completed: req.body.completed,
      });
      res.json(todo);
    } catch (error) {
      console.log(error + "patchTodo");
    }
  },
};
