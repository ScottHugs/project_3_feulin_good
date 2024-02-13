const express = require('express')
const router = express.Router()
const Station = require('../models/station')


router.get('/api/stations/all', (req, res) => {

  Station.findAll()
    .then(stations => res.json(stations))  

})

router.get('/api/stations/random', (req, res) => {

  Station.findRandom()
    .then(station => res.json(station))

})


module.exports = router