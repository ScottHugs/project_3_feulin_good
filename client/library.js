
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
function markerInfo(marker, station){
  const infowindow = new google.maps.InfoWindow({
    content: `<h2>${station.name}</h2> 
             <p>${station.address}</p>`
  });
  
  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
    });
  });
}

export function renderMarkers(map) {

  fetch('http://localhost:8080/api/stations/all')
    .then(res => res.json())
    .then(stations => {

      for(let station of stations) {
        let myLatLng = {
          lat: Number(station.latitude),
          lng: Number(station.longitude)
        }
        
        const marker = new google.maps.Marker({
          position: myLatLng,
          map,
          title: station.name
        })

        markerInfo(marker, station)
      }
      
      nearestInfo(stations)
    })
}

export function mapCenter(map) {
  var latlng = map.getCenter();
  var lat = latlng.lat();
  var lng = latlng.lng();
  console.log(lat, lng);

  const mapCenter = document.querySelector('.map-center')

  const latElem = document.createElement('h5')
  latElem.textContent = lat;

  const lngElem = document.createElement('h5')
  lngElem.textContent = lng;

  mapCenter.appendChild(latElem)
  mapCenter.appendChild(lngElem)

}

function spotlightInfo(){

  fetch('http://localhost:8080/api/stations/random')
    .then(res => res.json())
    .then(station => {

      const spotlightName = document.querySelector('.spotlight h4')
      const spotlightAddress = document.querySelector('.spotlight p')

      spotlightName.textContent = station.name
      spotlightAddress.textContent = station.address

    })

}

spotlightInfo()