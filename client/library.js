
function nearestInfo(stations) {
  const nearestElem = document.querySelector('.nearest')

  for (let i = 0; i < 10; i ++) {
    const stationInfoElem = document.createElement('article')
    stationInfoElem.classList.add('station-info')
  
    const stationNameElem = document.createElement('p')
    stationNameElem.textContent = stations[i].name
  
    const stationAddressElem = document.createElement('p')
    stationAddressElem.textContent = stations[i].address
  
    const stationOwnerElem = document.createElement('p')
    stationOwnerElem.textContent = stations[i].owner
  
    stationInfoElem.appendChild(stationNameElem)
    stationInfoElem.appendChild(stationAddressElem)
    stationInfoElem.appendChild(stationOwnerElem)
  
    nearestElem.appendChild(stationInfoElem)
  }
}

export default function renderMarkers(map) {

  fetch('http://localhost:8080/api/stations/all')
    .then(res => res.json())
    .then(stations => {

      for(let station of stations) {
        let myLatLng = {
          lat: Number(station.latitude),
          lng: Number(station.longitude)
        }
        
        new google.maps.Marker({
          position: myLatLng,
          map,
          title: station.name
        })
      }
      
      nearestInfo(stations)
    })
}