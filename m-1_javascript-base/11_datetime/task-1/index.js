const getDateFormat = (date, sep) => [
  date.getFullYear(),
  date.getMonth() > 8 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`,
  date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`
].join(sep)

const newDate = new Date(2021, 1, 2)

console.log(getDateFormat(newDate, '-'))