
const spotlightRefresh = document.querySelector('.spotlight a')
spotlightRefresh.addEventListener('click', handleClickRefresh)
 
function handleClickRefresh() {
  spotlightInfo()
}


export function spotlightInfo(){

  fetch('http://localhost:8080/api/stations/random')
    .then(res => res.json())
    .then(station => {

      const spotlightName = document.querySelector('.spotlight h4')
      const spotlightAddress = document.querySelector('.spotlight p')

      spotlightName.textContent = station.name
      spotlightAddress.textContent = station.address

    })

}