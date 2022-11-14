let lessonTitle = 'Conversion type'
console.log(Number(lessonTitle), Boolean(lessonTitle), String(lessonTitle))

let lessonNumber = 4
console.log(Number(lessonNumber), Boolean(lessonNumber), String(lessonNumber));

let lessonId = Symbol('conversionType')
console.log(Boolean(lessonId), String(lessonId));

let typescriptCode = undefined
console.log(Number(typescriptCode), Boolean(typescriptCode), String(typescriptCode));

let isCompleted = false
console.log(Number(isCompleted), Boolean(isCompleted), String(isCompleted));

let homeworkLink = null
console.log(Number(homeworkLink), Boolean(homeworkLink), String(homeworkLink));

let moduleNumber = 1n
console.log(Number(moduleNumber), Boolean(moduleNumber), String(moduleNumber));

let date = {
  day: 'wednesday',
  month: 'november',
  year: 2022
}
console.log(Number(date), Boolean(date), String(date));


