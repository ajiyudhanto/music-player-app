const express = require('express')
const session = require('express-session')
const app = express()
const port = process.env.PORT || 4000;
const homeRouter = require('./routers/homeRouter')
const musicsRouter = require('./routers/musicsRouter')
const playlistsRouter = require('./routers/playlistsRouter')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))
app.use(express.static('views'))

app.use(session({
    secret: 'music player app',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }))

const myLogger = function (req, res, next) {
    console.log(req.session)
    next()
}

app.use(myLogger)

app.use('/', homeRouter)
app.use('/playlists', playlistsRouter)
app.use('/musics', musicsRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})