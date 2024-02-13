

let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: -38.400654164953046, lng: 146.15877161420863 },
    zoom: 13,
    minZoom: 9,
  });


  renderMarkers()
}

initMap();

function renderMarkers() {

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


    })
}


