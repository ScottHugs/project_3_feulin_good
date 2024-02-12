require('dotenv').config()

const express = require('express')
const app = express()
const port = 8080

app.get('/test', (req, res) => {
  res.send('It is working!')
})





app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
