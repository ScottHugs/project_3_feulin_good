export function getAddressOfCenterLocation(geocoder) {
  
  let latlng = {
    lat: Number(document.querySelector('.map-center > h5 > span').textContent),
    lng: Number(document.querySelector('.map-center > h5 + h5 > span').textContent)
  }

  geocoder
    .geocode( { location: latlng })
    .then(res => {
      const address = res.results[0].formatted_address
      const addressElem = document.querySelector('.address')
      addressElem.textContent = address 
    })
}