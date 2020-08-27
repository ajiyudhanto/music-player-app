const express = require('express')
const router = express.Router()
const UsersController = require('../controllers/usersController')

router.get('/register', UsersController.registerForm)
router.post('/register', UsersController.register)

router.get('/login', UsersController.loginForm)
router.post('/login', UsersController.login)

module.exports = router