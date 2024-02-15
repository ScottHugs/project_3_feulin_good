const db = require('../db')

function findAll(){
  const sql = `
      SELECT *
      FROM petrol_stations;
      `
      return db.query(sql).then(result => result.rows)
}

function findRandom(){
  const sql = `
    SELECT * 
    FROM petrol_stations
    ORDER BY RANDOM()
    LIMIT 1;
  `
  return db.query(sql).then(result => result.rows[0])
}

function getStationsWithinBounds(topRightCoords, bottomLeftCoords) {
  const sql = `
  SELECT *
  FROM petrol_stations
  WHERE latitude BETWEEN $3 AND $1
  AND longitude BETWEEN $4 AND $2;
  `
  return db.query(sql, [topRightCoords.lat, topRightCoords.lon, bottomLeftCoords.lat, bottomLeftCoords.lon]).then(result => result.rows)
}

module.exports = {
  findAll,
  findRandom, 
  getStationsWithinBounds
}