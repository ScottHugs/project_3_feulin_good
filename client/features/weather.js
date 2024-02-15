const mapCenterLocationWeather = document.querySelector('.map-center-location-weather > button')
mapCenterLocationWeather.addEventListener('click', handleClickWeather)
 
function handleClickWeather() {
  getCenterWeather()
}

export function getCurrentWeather(map) {
  // let lat = Number(document.querySelector('.map-center > h5 > span').textContent)
  // let lng = Number(document.querySelector('.map-center > h5 + h5 > span').textContent)

  let latlng = map.getCenter()
  let lat = latlng.lat()
  let lng = latlng.lng()

  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=347533d0e42725230e0bb151a7cb2eea`)
  .then(res => res.json())
  .then(result => {
    let temp = result.main.temp
    let location = result.name
    let humidity = result.main.humidity

    let cityElem = document.querySelector('.user-location-weather > p > span')
    cityElem.textContent = location

    let tempElem = document.querySelector('.user-location-weather > p + p > span')
    tempElem.textContent = temp + 'ºC'

    let humidityElem = document.querySelector('.user-location-weather > p + p + p > span')
    humidityElem.textContent = humidity + '%'
  })
}

export function getCenterWeather() {
  let lat = Number(document.querySelector('.map-center > h5 > span').textContent)
  let lng = Number(document.querySelector('.map-center > h5 + h5 > span').textContent)

  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=347533d0e42725230e0bb151a7cb2eea`)
  .then(res => res.json())
  .then(result => {
    let temp = result.main.temp
    let location = result.name
    let humidity = result.main.humidity

    let cityElem = document.querySelector('.map-center-location-weather > p > span')
    cityElem.textContent = location

    let tempElem = document.querySelector('.map-center-location-weather > p + p > span')
    tempElem.textContent = temp + 'ºC'

    let humidityElem = document.querySelector('.map-center-location-weather > p + p + p > span')
    humidityElem.textContent = humidity + '%'
  })
}