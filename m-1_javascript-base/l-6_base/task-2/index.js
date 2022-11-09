let correctAnswers = 0

const questions = [
  {question: 'Сколько будет 2 + 2?', answer: 4},
  {question: 'Сколько будет 2 * 2?', answer: 4},
  {question: 'У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?', answer: 1},
  {question: 'У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?', answer: 12},
  {question: 'Сколько будет 2 + 2 * 2?', answer: 6},
]

for (let item of questions) {
  if (Number((prompt(item.question) || '').trim()) === item.answer) {
    alert('Ответ верный')
    correctAnswers++
  } else alert('Ответ неверный')
}

alert(`Конец теста! Правильные ответы - ${correctAnswers}; Неправильные ответы - ${questions.length - correctAnswers}.`)
