const { Music, Playlist, PlaylistMusic } = require('../models')

class MusicsController {
    static showAllData (req, res) {
        Music.findAll({
            order: [['judul', 'ASC']]
        })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.send(err)
        })
    }

    static play (req, res) {
        Music.findOne({
            where: {
                id: Number(req.params.id)
            }
        })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.send(err)
        })
    }

    static addMusicToPlaylist (req, res) {
        PlaylistMusic.create({
            PlaylistId: Number(req.params.playlistId),
            MusicId: Number(req.params.musicId),
            createdAt: new Date(),
            updatedAt: new Date()
        })
        .then(success => {
            res.send('sukses') //  HARUS DIGANTI REDIRECT
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = MusicsController