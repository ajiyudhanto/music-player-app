const express = require('express')
const router = express.Router()
const HomeController = require('../controllers/homeController')

router.get('/', HomeController.showHomeInterface)

module.exports = router