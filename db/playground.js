require('dotenv').config()

const Station = require('../models/station')
const Owner = require('../models/owner')

// Station.findAll()
//   .then(stations => console.log(stations))

// Owner.findOwners()
// .then(owners => console.log(owners))

Station.findRandom()
  .then(station => console.log(station))
