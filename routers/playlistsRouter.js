const express = require('express')
const router = express.Router()
const PlaylistsController = require('../controllers/playlistsController')

router.get('/list', PlaylistsController.showMyPlaylists)

router.get('/create', PlaylistsController.createForm)
router.post('/create', PlaylistsController.create)

router.get('/delete', PlaylistsController.delete)

module.exports = router