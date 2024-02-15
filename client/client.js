import { timeDisplayUpdater } from "./features/clock.js"
import { spotlightInfo } from "./features/spotlight.js"
import { getStats } from "./features/stats.js"
import { mapCenter } from "./features/centerLocation.js"
import { nearestInfo } from "./features/nearestStations.js"
import { getCurrentWeather } from "./features/weather.js";
import { getAddressOfCenterLocation } from "./features/getAddressOfCenterLocation.js"

let map;


getUserLocation()

timeDisplayUpdater()
setInterval(timeDisplayUpdater,1000)

spotlightInfo()

getStats()

nearestInfo()

function getUserLocation() {
  navigator.geolocation.getCurrentPosition(getLatAndLon)
}

function getLatAndLon (position) {
  let latAndLon = {}
  latAndLon.lat = position.coords.latitude
  latAndLon.lon = position.coords.longitude
  
  initMap(latAndLon)
}

async function initMap(latAndLon) {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {

    center: { lat: latAndLon.lat, lng: latAndLon.lon },
    zoom: 13,
    //minZoom: 9
  })

  const geocoder = new google.maps.Geocoder()

  mapCenter(map)
  getCurrentWeather(map)
  

  const lookupAddressBtn = document.querySelector('.map-center button')
  lookupAddressBtn.addEventListener('click', () => {
    getAddressOfCenterLocation(geocoder)
  })

  map.addListener('idle', () => {
    mapCenter(map)
    renderMarkersWithinBounds(map)
  })
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

function renderMarkersWithinBounds (map) {

  let bounds = map.getBounds()
  //let nE = bounds.getNorthEast().lat()

  
  let ne = {
    lat: bounds.getNorthEast().lat(),
    lon: bounds.getNorthEast().lng()
  }
  
  let sw = {
    lat: bounds.getSouthWest().lat(),
    lon: bounds.getSouthWest().lat()
  }


  let url = `http://localhost:8080/api/stations/bounds?neLat=${ne.lat}&neLon=${ne.lon}&swLat=${sw.lat}&swLon=${sw.lon}`

  fetch(url)
    .then(res => res.json())
    .then(stations => {
        const icons = {
        "BP" : "/icons/BP.png",
        "7-Eleven Pty Ltd" : "/icons/7_eleven.png",
        "Caltex" : "/icons/caltex.png",
        "Shell" : "/icons/BP.png",
        "United" : "/icons/united.png",
        "Ampol" : "/icons/ampol.png"
      }

      for(let station of stations) {
        let myLatLng = {
          lat: Number(station.latitude),
          lng: Number(station.longitude)
        }
        
        
        let icon = ""

        if (station.owner in icons){
          icon = icons[station.owner]
        } else {
          icon = "/icons/petrol_station.png"
        }

        const marker = new google.maps.Marker({
          position: myLatLng,
          map,
          title: station.name,
          icon: icon
        })

        markerInfo(marker, station)
      }
    })
}





















  

