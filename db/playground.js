require('dotenv').config()

const Station = require('../models/station')

Station.findAll()
  .then(stations => console.log(stations))