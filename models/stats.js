const db = require('../db')

function totalStationsByOwner() {
  const sql =`
    SELECT owner, count (owner) 
    FROM petrol_stations 
    GROUP by owner order by count desc;
    `
  return db.query(sql).then(result => {
    let arrayOfOwners = result.rows
    let moreThanOneStation = []
    for (let owner of arrayOfOwners) {
      if (owner.count > 1) {
        moreThanOneStation.push(owner)
      }
    }
    return moreThanOneStation
  })

}

module.exports = {
  totalStationsByOwner
}