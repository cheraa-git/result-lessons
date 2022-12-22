const ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums'
const container = document.querySelector('.data-container')
const loader = container.querySelector('#loader')

async function renderAlbums() {
  toggleLoader()
  try {
    const response = await fetch(ALBUMS_URL)
    const albums = await response.json()
    const albumsHtml = albums.map((album) => `<li>${album.title}</li>`).join('\n')
    console.log(albumsHtml)
    container.insertAdjacentHTML('beforeend', albumsHtml)
  } catch (e) {
    console.log(e)
    container.innerHTML = '<p>Произошла ошибка в получении данных об альбомах...</p>'
  } finally {
    toggleLoader()
  }
}

function toggleLoader() {
  loader.hidden = !loader.hidden
}

renderAlbums()
