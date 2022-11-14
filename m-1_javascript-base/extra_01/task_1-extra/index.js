let javaScriptDescription = 'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.'
javaScriptDescription = javaScriptDescription
  .slice(0, Math.floor((javaScriptDescription.length - 1) / 2))
  .replaceAll('a', 'A')
  .replaceAll('а', 'А')
  .replaceAll(' ', '')
  .repeat(3)

console.log(Math.floor((javaScriptDescription.length - 1)  / 2))
