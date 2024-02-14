export function getCurrentWeather(lat, lng) {
  
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