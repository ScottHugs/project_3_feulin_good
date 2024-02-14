require('dotenv').config()

const Station = require('../models/station')
const Owner = require('../models/owner')
const Stats = require('../models/stats')

// Station.findAll()
//   .then(stations => console.log(stations))

// Owner.findOwners()
// .then(owners => console.log(owners))

// Station.findRandom()
//   .then(station => console.log(station))

// Stats.totalStationsByOwner()
//   .then(stats => console.log(stats))

let topLeftCoords = {
  lat: -38.184397,
  lon: 145.634483
}

let bottomRightCoords = {
  lat: -38.650826,
  lon: 146.696233
}

Station.getStationsWithinBounds(topLeftCoords, bottomRightCoords)
.then(stations => console.log(stations))


