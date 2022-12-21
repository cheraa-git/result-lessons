const container = document.querySelector('#data-container')
const loader = container.querySelector('#loader')


function fetchUsers() {
  loaderToggle()
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => {
      if (!resp.ok) throw new Error('Ошибка получения данных')
      return resp.json()
    })
    .then((users) => appendHtmlUsers(users)
    )
    .catch(console.error)
    .finally(loaderToggle)
}

function getUsersByIds(ids) {
  loaderToggle()
  const promises = ids.map(id => fetch(`https://jsonplaceholder.typicode.com/users/${id}`))
  Promise.all(promises)
    .then(responses => {
      const result = responses.map(resp => {
        if (!resp.ok) throw new Error('Ошибка')
        return resp.json()
      })
      return Promise.all(result)
    })
    .then((users) => appendHtmlUsers(users))
    .catch(console.log)
    .finally(loaderToggle)
}

function appendHtmlUsers(users) {
  users.forEach((usr) => {
    container.insertAdjacentHTML('beforeend', `<li><a href="#">${usr.name}</a></li>`)
  })
}

function loaderToggle() {
  loader.hidden = !loader.hidden
}

// Task 1
// fetchUsers()

// Task 2
getUsersByIds([5, 6, 2, 1])
