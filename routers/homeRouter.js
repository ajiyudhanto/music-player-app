const express = require('express')
const router = express.Router()
const HomeController = require('../controllers/homeController')

router.get('/', HomeController.loginForm)
router.post('/', HomeController.login)

router.get('/home', HomeController.home)

module.exports = router 