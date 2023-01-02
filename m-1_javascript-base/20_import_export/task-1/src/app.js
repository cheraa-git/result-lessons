import {getRandomColor} from "./utils"

export default function initApp() {
  document.body.style.background = getRandomColor()

  const button = document.createElement('button')
  button.className = 'button'
  button.textContent = 'Изменить цвет страницы'
  document.body.append(button)

  button.addEventListener('click', () => {
    document.body.style.background = getRandomColor()
  })

}
