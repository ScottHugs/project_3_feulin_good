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

Stats.totalStationsByOwner()
  .then(stats => console.log(stats))
