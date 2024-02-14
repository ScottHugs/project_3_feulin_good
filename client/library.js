
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
  let latlng = map.getCenter();
  let lat = latlng.lat();
  let lng = latlng.lng();

  const mapCenter = document.querySelector('.map-center')

  const latElem = document.createElement('h5')
  latElem.textContent = lat;

  const lngElem = document.createElement('h5')
  lngElem.textContent = lng;

  mapCenter.appendChild(latElem)
  mapCenter.appendChild(lngElem)

  getCurrentWeather(lat, lng)
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

const spotlightRefresh = document.querySelector('.spotlight a')
spotlightRefresh.addEventListener('click', handleClickRefresh)

function handleClickRefresh() {
  spotlightInfo()
}

spotlightInfo()

function getCurrentWeather(lat, lng) {
  
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=347533d0e42725230e0bb151a7cb2eea`)
  .then(res => res.json())
  .then(result => {
    let temp = result.main.temp
    let location = result.name
    let humidity = result.main.humidity

    const currentWather = document.querySelector('.current-weather')


    let locationElem = document.createElement('h5')
    locationElem.textContent = 'Location: ' + location

    let tempElem = document.createElement('h5')
    tempElem.textContent = 'Temperature: ' + temp

    let humidityElem = document.createElement('h5')
    humidityElem.textContent = 'Humidity: ' + humidity

    currentWather.appendChild(locationElem)
    currentWather.appendChild(tempElem)
    currentWather.appendChild(humidityElem)

  })

}