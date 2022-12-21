const container = document.querySelector('#data-container')
const loader = container.querySelector('#loader')

function getFastestLoadedPhoto(ids) {
  loaderToggle()
  const promises = ids.map(id => fetch(`https://jsonplaceholder.typicode.com/photos/${id}`))
  Promise.race(promises)
    .then(response => {
      if (!response.ok) throw new Error('Ошибка загрузки фото')
      return response.json()
    })
    .then((photo) => {
      appendHtmlPhoto(photo)
    })
    .catch(console.log)
    .finally(loaderToggle)
}

function loaderToggle() {
  loader.hidden = !loader.hidden
}

function appendHtmlPhoto(photo) {
  container.insertAdjacentHTML('beforeend',
    `<li class="photo-item">
      <img class="photo-item__image" src="${photo.url}" alt="photo">
      <h3 class="photo-item__title">
        ${photo.title}
      </h3>
     </li>`)
}

getFastestLoadedPhoto([60, 12, 55])
