import './index.css'

const isCookiesAccept = localStorage.getItem('isCookiesAccept')
const cookieBlock = document.querySelector('.cookie-consent')

if (isCookiesAccept) {
  cookieBlock.remove()
} else {
  const acceptCookieBtn = cookieBlock.querySelector('.cookie-consent__button')
  acceptCookieBtn.addEventListener('click', () => {
    localStorage.setItem('isCookiesAccept', 'true')
    cookieBlock.remove()
  })
}


