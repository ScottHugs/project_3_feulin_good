require('dotenv').config()

const express = require('express')
const app = express()
app.set('view engine', 'ejs')
const port = 8080
const stationRouter = require('./routes/station_router')


app.use(express.static('client'))

app.use(express.json())

app.get('/', (req, res) => {
  const googleApiKey = process.env.GOOGLE_API_KEY
  res.render('home', {
    googleApiKey: googleApiKey
  })
})


app.get('/test', (req, res) => {
  res.send('It is working!')
})


app.use(stationRouter)


app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
