const myName = 'Александр'
const programmingLanguage = 'JavaScript'
const courseCreatorName = 'Максима'
const reasonText = 'Мне нравится работать из любой точки мира'
const numberOfMonth = 12

let myInfoText = `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования\
 ${programmingLanguage} на курсе по${programmingLanguage} у ${courseCreatorName}.\
 Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал(а)\
 ${programmingLanguage} ${numberOfMonth} месяцев(а). Я уверен(а), что пройду данный курс до конца!`
console.log(myInfoText)

myInfoText = myInfoText
  .replaceAll('JavaScript', 'javascript')
  .replaceAll('курс', 'КУРС')
console.log(myInfoText)

console.log(`myInfoText length: ${myInfoText.length}`)
console.log(myInfoText[0], myInfoText[myInfoText.length - 1])
