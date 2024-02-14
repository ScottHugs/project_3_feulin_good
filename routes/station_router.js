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

router.get('/api/stations/bounds', (req, res) => {

  let topLeftCoords = {
    lat: -38.184397,
    lon: 145.634483
  }

  let bottomRightCoords = {
    lat: -38.650826,
    lon: 146.696233
  }

  Station.getStationsWithinBounds(topLeftCoords, bottomRightCoords)
    .then(stations => res.json(stations))
})


module.exports = router