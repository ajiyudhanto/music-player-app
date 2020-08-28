const { User, Playlist, Music } = require('../models')
     
class HomeController {
    static loginForm (req, res) {
        if (req.session.userId) {
            res.redirect('/home')
        } else {
            res.render('./login.ejs')
        }
        // res.render('./add.ejs')
    }

    static login (req, res) {
        User.findOne({
            where: {
                username: req.body.username,
                password: req.body.password
            }
        })
        .then(data => {
            if (data) {
                req.session.userId = data.id
                res.redirect('/home')
            } else {
                res.send(`username atau password salah`)
            }
        })
        .catch(err => {
            res.send(err)
        })
    }

    static home (req, res) {
        let userData = {}
        let allMusic = []
        User.findOne({
            include: [Playlist],
            where: {
                id: req.session.userId
            }
        })
        .then(data => {
            userData = data
            return Music.findAll()
        })
        .then(data2 => {
            allMusic = data2
            res.render('./index.ejs', {userData, allMusic})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static registerForm (req, res) {
        res.render('./register.ejs')
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
            res.render('./login.ejs')
        })
        .catch (err => {
            res.send(err)
        })
    }

    static logout (req, res) {
        delete req.session.userId
        res.redirect('/')
    }
}

module.exports = HomeController