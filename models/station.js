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


module.exports = {
  findAll,
  findRandom
}