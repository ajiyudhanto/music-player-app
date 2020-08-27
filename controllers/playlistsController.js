const { User, Playlist, Music } = require('../models')

class PlaylistsController {
    static showMyPlaylists (req, res) {
        Playlist.findAll({
            include: [Music]
            // where: {
            //     UserId: req.session.userId
            // }
        })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.send(err)
        })
    }

    static play (req, res) {
        Playlist.findOne({
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

    static createForm (req, res) {
        Music.findAll()
        .then(data => {
            res.send(data)
            // res.render('./createPlaylistForm.ejs', {data})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static create (req, res) {
        Playlist.create({
            name: req.body.name,
            createdAt: new Date(),
            updatedAt: new Date(),
            // UserId: req.session.userId
        })
        .then(success => {
            res.redirect(`/${req.params.userid}/playlists/list`)
        })
        .catch(err => {
            res.send(err)
        })
    }

    static delete (req, res) {
        Playlist.destroy({
            where: {
                // UserId: req.session.userId,
                // id: Number(req.params.id)
            }
        })
        .then(success => {
            res.send('sukses')
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = PlaylistsController