timeDisplayUpdater()

setInterval(timeDisplayUpdater,1000)

function timeDisplayUpdater(){
  const timeDisplay = document.querySelector('.time-display')
  const timeSection = document.querySelector('.time-section')

  let time = dayjs().format('ddd hh:mm:ss a')
  timeDisplay.textContent = time

  let hour = dayjs().hour()
  if (hour >= 12) {
    timeSection.classList.add('pm')
  } else {
    timeSection.classList.remove('pm')
  }

}

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
    for (let item of totalStationsByOwner) {
      let owner = item.owner
      let total = item.count
      let ownerElem = document.createElement('h5')
      ownerElem.textContent = owner
      let totalElem = document.createElement('h5')
      totalElem.textContent = total

      let ownerDivElem = document.createElement('div')
      ownerDivElem.classList.add('owner-stations')

      statsElem.appendChild(ownerDivElem)
      ownerDivElem.appendChild(ownerElem)
      ownerDivElem.appendChild(totalElem)
    }
  })


  

