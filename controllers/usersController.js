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
}

module.exports = UsersController