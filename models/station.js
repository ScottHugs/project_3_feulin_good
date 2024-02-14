const db = require('../db')

function findAll(){
  const sql = `
      SELECT *
      FROM petrol_stations
      LIMIT 400;
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

function getStationsWithinBounds(topLeftCoords, bottomRightCoords) {
  const sql = `
  SELECT *
  FROM petrol_stations
  WHERE latitude BETWEEN $3 AND $1
  AND longitude BETWEEN $2 AND $4;
  `
  return db.query(sql, [topLeftCoords.lat, topLeftCoords.lon, bottomRightCoords.lat, bottomRightCoords.lon]).then(result => result.rows)
}


module.exports = {
  findAll,
  findRandom, 
  getStationsWithinBounds
}