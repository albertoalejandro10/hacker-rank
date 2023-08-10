function timeConversion (s) {
  const indicator = s.slice(-2)
  const time = s.slice(0, 8)
  console.log(time, indicator)

  let [hours, minutes, seconds] = time.split(':')
  console.log(minutes, seconds)

  if (indicator === 'PM' && hours < 12) {
    hours = parseInt(hours, 10) + 12
  } else if (indicator === 'AM' && hours === '12') {
    hours = '00'
  }

  return `${hours}:${minutes}:${seconds}`
}

const time = '07:05:45PM'
timeConversion(time)
