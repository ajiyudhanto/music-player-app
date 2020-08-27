const express = require('express')
const router = express.Router()
const MusicsController = require('../controllers/musicsController')

router.get('/list', MusicsController.showAllData)
router.get('/play/:id', MusicsController.play)

module.exports = router