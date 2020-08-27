const express = require('express')
const router = express.Router()
const PlaylistsController = require('../controllers/playlistsController')
const checkLogin = require('../helpers/checkLogin')

router.use(checkLogin)

router.get('/list', PlaylistsController.showMyPlaylists)

router.get('/music/:id', PlaylistsController.showMusic)
router.get('/play/:id', PlaylistsController.play)

router.get('/create', PlaylistsController.createForm)
router.post('/create', PlaylistsController.create)

router.get('/delete', PlaylistsController.delete)

module.exports = router