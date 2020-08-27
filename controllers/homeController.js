const { User, Playlist, Music } = require('../models')

class HomeController {
    static showHomeInterface (req, res) {
        // User.findOne({
        //     include: [Playlist],
        //     where: {
        //         username: req.body.username
        //     }
        // })
        res.send('ini home')
    }
}

module.exports = HomeController