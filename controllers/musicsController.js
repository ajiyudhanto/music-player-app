const { Music } = require('../models')

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
}

module.exports = MusicsController