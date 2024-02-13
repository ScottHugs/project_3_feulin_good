import renderMarkers from "./library.js"


let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: -38.400654164953046, lng: 146.15877161420863 },
    zoom: 13,
    minZoom: 9,
  });


  renderMarkers(map)
}

initMap();
