const password = prompt('Введите пароль')
const regEx = /^\b(?=.*[0-9])(?=.*[A-Z])\S{3,30}\b$/
alert(
  regEx.test(password)
    ? 'Пароль валидный. Добро пожаловать в аккаунт!'
    : 'Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.'
)

// Решил попробывать разобрваться с регулярками. Буду рад критике относительно них
