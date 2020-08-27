const { User, Music, Playlist } = require('../models')

class UsersController {
    static registerForm (req, res) {
        res.send('ini form register')
    }

    static register (req, res) {
        User.create ({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            createdAt: new Date(),
            updatedAt: new Date()
        })
        .then (success => {
            res.redirect('/')
        })
        .catch (err => {
            res.send(err)
        })
    }

    static loginForm (req, res) {
        res.send('ini form login')
    }

    static login (req, res) {
        User.findOne({
            include: [Playlist],
            where: {
                username: req.body.username,
                password: req.body.password
            }
        })
        .then (data => {
            req.session.userId = data.id
            res.redirect('/')
        })
        .catch (err => {
            res.send(err)
        })
    }
}

module.exports = UsersController