const express = require('express')
const router = express.Router()
const UsersController = require('../controllers/usersController')

router.get('/register', UsersController.registerForm)
router.post('/register', UsersController.register)

module.exports = router