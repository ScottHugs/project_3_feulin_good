
export function timeDisplayUpdater(){
  const timeDisplay = document.querySelector('.time-display')
  const timeSection = document.querySelector('.time-section')

  let time = dayjs().format('ddd hh:mm:ss a')
  timeDisplay.textContent = time

  let hour = dayjs().hour()
  if (hour >= 12) {
    timeSection.classList.add('pm')
  } else {
    timeSection.classList.remove('pm')
  }

}
