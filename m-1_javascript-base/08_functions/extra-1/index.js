function checkQuestionAnswer(question, correctAnswer) {
  const isAnswerCorrect = prompt(question).trim().toLowerCase() === correctAnswer.trim().toLowerCase()
  alert(isAnswerCorrect ? 'Ответ верный' : 'Ответ неверный')
}

checkQuestionAnswer('Арбуз это фрукт или ягода?', 'Ягода');
checkQuestionAnswer('Сколько в среднем зубов у взрослого человека?', '32');
checkQuestionAnswer('Как называется самая маленькая птица в мире?', 'Колибри');