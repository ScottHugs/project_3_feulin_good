const express = require('express')
const router = express.Router()
const Stats = require('../models/stats')
const Station = require('../models/station')
const Owner = require('../models/owner')

router.get('/api/stats', (req, res) => {
  let statsInfo = {}
  Stats.totalStationsByOwner()
    .then(result => {
      statsInfo.owners = result

      Owner.findOwners()
        .then(result => statsInfo.total_owners = result.length)
        .then(result => {
          Station.findAll()
            .then(result => { statsInfo.total_stations = result.length
            return statsInfo
          }) 
          .then(statsInfo => res.json(statsInfo))
        })
    })  
})

module.exports = router