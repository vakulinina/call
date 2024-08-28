export const formatDateTime = (dateString) => {
  const targetDate = new Date(dateString)
  const date = targetDate.toDateString().slice(0, -5)
  const time = targetDate.toTimeString().split(' ')[0].slice(0, -3)

  return [date, time]
}

export const formatDuration = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60)

  if (minutes > 0) {
    return minutes === 1 ? `${minutes} minute` : `${minutes} minutes`
  }

  const seconds = timeInSeconds % 60

  return seconds === 1 ? `${seconds} second` : `${seconds} seconds`
}
