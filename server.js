require('dotenv').config()

const express = require('express')
const app = express()
app.set('view engine', 'ejs')
const port = 8080


app.use(express.static('client'))


app.get('/', (req, res) => {
  const googleApiKey = process.env.GOOGLE_API_KEY
  res.render('home', {
    googleApiKey: googleApiKey
  })
})


app.get('/test', (req, res) => {
  res.send('It is working!')
})





app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
