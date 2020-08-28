const { User, Playlist, Music, PlaylistMusic } = require('../models')
const { Op } = require("sequelize");

class PlaylistsController {
    static showMyPlaylists (req, res) {
        Playlist.findAll({
            include: [Music],
            where: {
                UserId: req.session.userId
            }
        })
        .then(data => {
            res.render('./playlist.ejs', {data})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static showMusic (req, res) {
        let data = {}
        Playlist.findOne({
            include: [Music],
            where: {
                id: Number(req.params.id)
            }
        })
        .then(data2 => {
            data = data2
            return Music.findAll({
                // where: {
                //    id: {
                //     [Op.ne]: Number(req.params.id)
                //    }      
                // }
            })
        })
        .then(list => {
            res.render('./musicInPlaylist.ejs', {data, list})
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
            res.render('./addPlaylist.ejs', {data})
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
            UserId: req.session.userId
        })
        .then(success => {
            res.redirect(`/playlists/list`)
        })
        .catch(err => {
            res.send(err)
        })
    }

    static addMusic (req, res) {
        PlaylistMusic.create({
            PlaylistId : Number(req.params.playlistId),
            MusicId : Number(req.params.musicId),
            createdAt: new Date(),
            updatedAt: new Date()
        })
        .then (success=> {
            res.redirect (`/playlists/music/${req.params.playlistId}`)
        })
        .catch(err => {
            res.send(err)
        })
    }

    static delete (req, res) {
        PlaylistMusic.destroy({
            where: {
                PlaylistId : Number(req.params.playlistId),
                MusicId : Number(req.params.musicId)
            }
        })
        .then(success => {
            res.redirect (`/playlists/music/${req.params.playlistId}`)
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = PlaylistsController