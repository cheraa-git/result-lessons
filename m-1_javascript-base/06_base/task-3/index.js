const questions = ['JavaScript появился в 1995 году?', 'Спецификация JavaScript называется ECMAScript?', 'JavaScript был создан за 1 месяц?']

for (let question of questions) {
  if (confirm(question)) alert('Верно')
  else alert('Правильный ответ - да')
}