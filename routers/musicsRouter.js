const express = require('express')
const router = express.Router()
const MusicsController = require('../controllers/musicsController')
const checkLogin = require('../helpers/checkLogin')
const PlaylistsController = require('../controllers/playlistsController')

router.use(checkLogin)

router.get('/list', PlaylistsController.showMyPlaylists)

router.get('/list', MusicsController.showAllData)
router.get('/play/:id', MusicsController.play)

module.exports = router