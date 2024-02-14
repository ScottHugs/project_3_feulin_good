import {
  mapCenter, 
  renderMarkers
} from './library.js'

let map;

async function initMap(latAndLon) {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {

    center: { lat: latAndLon.lat, lng: latAndLon.lon },
    zoom: 13,
    minZoom: 9
  });


  renderMarkers(map)
  mapCenter(map)

}


function getUserLocation() {
  navigator.geolocation.getCurrentPosition(getLatAndLon)
}

function getLatAndLon (position) {
  let latAndLon = {}
  latAndLon.lat = position.coords.latitude
  latAndLon.lon = position.coords.longitude
  console.log(latAndLon)

  initMap(latAndLon)
}

getUserLocation()