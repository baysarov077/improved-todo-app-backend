const { Router } = require('express')
const { todosController } = require('../controllers/todos.controller')
const router = Router()

router.get('/todos', todosController.getTodo)
router.post('/todos', todosController.addTodo)
router.delete('/todos/:id', todosController.deleteTodo)
router.patch('/todos/:id', todosController.patchTodo)

module.exports = router