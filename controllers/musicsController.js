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

    static play (req, res) {
        Music.findOne({
            where: {
                id: Number(req.params.id)
            }
        })
        .then(data => {
            res.send(data)
        })
    }
}

module.exports = MusicsController