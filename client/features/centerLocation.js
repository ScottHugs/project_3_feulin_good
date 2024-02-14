export function mapCenter(map) {
  let latlng = map.getCenter()
  let lat = latlng.lat()
  let lng = latlng.lng()

  const latElem = document.querySelector('.map-center > h5 > span')
  latElem.textContent = lat

  const lngElem = document.querySelector('.map-center > h5 + h5 > span')
  lngElem.textContent = lng
}