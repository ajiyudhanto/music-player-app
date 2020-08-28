const express = require('express')
const router = express.Router()
const HomeController = require('../controllers/homeController')
const checkLogin = require('../helpers/checkLogin')

router.get('/', HomeController.loginForm)
router.post('/', HomeController.login)

router.get('/register', HomeController.registerForm)
router.post('/register', HomeController.register)

router.use(checkLogin)

router.get('/home', HomeController.home)
router.get('/logout', HomeController.logout)

module.exports = router 