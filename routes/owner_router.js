const express = require('express')
const router = express.Router()
const Owner = require('../models/owner')

router.get('/api/owners', (req, res) => {
  Owner.findOwners()
    .then(owners => res.json(owners))
})

module.exports = router