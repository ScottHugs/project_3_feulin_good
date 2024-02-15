export function getStats () {

  fetch('http://localhost:8080/api/stats')
    .then(res => res.json())
    .then(stats => {
      let totalStations = stats.total_stations
      let totalOwners = stats.total_owners
  
      let totalStationsElem = document.createElement('h4')
      totalStationsElem.textContent = 'total station: ' + totalStations
  
      let totalOwnersElem = document.createElement('h4')
      totalOwnersElem.textContent = 'total owners: ' + totalOwners
  
      let statsElem = document.querySelector('.stats')
  
      statsElem.appendChild(totalStationsElem)
      statsElem.appendChild(totalOwnersElem)
  
      let totalStationsByOwner = stats.owners
      for (let i=0; i<totalStationsByOwner.length; i++) {
        
          let owner = totalStationsByOwner[i].owner
          let total = totalStationsByOwner[i].count
          let ownerElem = document.createElement('h5')
          ownerElem.textContent = owner
          let totalElem = document.createElement('h5')
          totalElem.textContent = total
    
          let ownerDivElem = document.createElement('div')
          ownerDivElem.classList.add('owner-stations')
          if(i%2 === 0){
          ownerDivElem.style.backgroundColor = "lightgray"
          }
    
          statsElem.appendChild(ownerDivElem)
          ownerDivElem.appendChild(ownerElem)
          ownerDivElem.appendChild(totalElem)
        }
      }
    )}


