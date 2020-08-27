const { User, Playlist, Music } = require('../models')
     
class HomeController {
    static loginForm (req, res) {
        res.render('./login.ejs')
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
        User.findOne({
            include: [Playlist],
            where: {
                id: req.session.userId
            }
        })
        .then(data => {
            res.render('./index.ejs', {data})
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = HomeController