export function getRandomColor() {
  let color = ''
  for (let i = 0; i < 6; i++) {
    const randomNumb = Math.round(Math.random() * 16)
    const hexNumb = randomNumb.toString(16)
    color += hexNumb
  }
  return '#' + color
}
