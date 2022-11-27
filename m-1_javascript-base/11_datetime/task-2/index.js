const convertMsToDays = (ms) => Math.round(ms / 1000 / 60 / 60 /24)
const getDaysBeforeBirthday = (nextBirthdayDate) => convertMsToDays(nextBirthdayDate - Date.now())

console.log(getDaysBeforeBirthday(new Date(2023, 2, 10)))