const addDays = (date, days) => new Date(date.getTime() + days * 24 * 60 * 60 * 1000)

console.log(addDays(new Date(), 7))