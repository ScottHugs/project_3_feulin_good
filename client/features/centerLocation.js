import { getCurrentWeather } from "./weather.js";

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