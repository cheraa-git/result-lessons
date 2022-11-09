const userText = prompt('Введите текст').trim()
const wordFromText = prompt('Введите слово из текста')
const indexOfWord = userText.indexOf(wordFromText)

alert(`Результат: ${userText.slice(0, indexOfWord)}`)