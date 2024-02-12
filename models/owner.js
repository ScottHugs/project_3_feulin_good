const db = require('../db')

function findOwners() {

  const sql = `
    SELECT DISTINCT owner 
    FROM petrol_stations;
    `
    return db.query(sql).then(result => result.rows)
}



module.exports = {
  findOwners
}