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
    })
}