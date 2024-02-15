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

  let topRightCoords = {
    lat: req.query.neLat,
    lon: req.query.neLon
  }

  let bottomLeftCoords = {
    lat: req.query.swLat,
    lon: req.query.swLon
  }

  Station.getStationsWithinBounds(topRightCoords, bottomLeftCoords)
    .then(stations => res.json(stations))
  
})


module.exports = router