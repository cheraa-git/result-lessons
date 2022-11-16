const showSuccessMessage = (message) => {
  console.log(message)
}
const showErrorMessage = (message) => {
  console.error(message)
}

const checkTextOnErrorSymbol = (text, errorSymbol, successCallback, errorCallback) => {
  const reg = new RegExp(`${errorSymbol}`, 'g')
  const errList = [...text.matchAll(reg)]

  errList.forEach((match) => errorCallback(`Найден запрещенный символ "${match[0]}" под индексом ${match.index}`))

  !errList.length && successCallback('В данном тексте нет запрещенных символов')
}

const txt = 'Привет! Как дела! Давно мы с тобой не виделись.'
checkTextOnErrorSymbol(txt, 'н', showSuccessMessage, showErrorMessage)

