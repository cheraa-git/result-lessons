let tasks = [
  {id: '1138465078061', completed: true, text: 'Посмотреть новый урок по JavaScript'},
  {id: '1138465078062', completed: true, text: 'Выполнить тест после урока'},
  {id: '1138465078063', completed: false, text: 'Выполнить ДЗ после урока'},
]
const form = document.querySelector('.create-task-block')
const input = form.elements.taskName
const errSpan = showErrorSpan()
const tasksList = document.querySelector('.tasks-list')


form.addEventListener('submit', onSubmit)
tasksList.addEventListener('click', onTaskRemove)
render()

function onSubmit(event) {
  event.preventDefault()

  const newTask = {id: `${Date.now()}`, completed: false, text: input.value}
  if (!input.value) {
    showErrorSpan('Название задачи не должно быть пустым')
    errSpan.textContent = 'Название задачи не должно быть пустым'
  } else if (tasks.find(task => task.text === input.value)) {
    showErrorSpan('Задача с таким названием уже существует')
  } else {

    errSpan?.remove()
    tasks.push(newTask)
    render()
  }

}

function render() {
  document.querySelector('.tasks-list').innerHTML = ''
  tasks.forEach(task => addTask(task))
}

function addTask(task) {
  document.querySelector('.tasks-list').insertAdjacentHTML('beforeend',
    `<div class="task-item" id=${task.id}>
          <div class="task-item__main-container">
              <div class="task-item__main-content">
                  <form class="checkbox-form">
                      <input class="checkbox-form__checkbox" ${task.completed && "checked"} type="checkbox" id="task-1">
                      <label for="task-${task.id}"></label>
                  </form>
                  <span class="task-item__text">
                      ${task.text}
                  </span>
              </div>
              <button class="task-item__delete-button default-button delete-button" data-delete-task-id=${task.id}>
                  Удалить
              </button>
          </div>
    </div>`
  )
}

function showErrorSpan(message = '') {
  let errorSpan = form.querySelector('.error-message-block')
  if (errorSpan) {
    errorSpan.textContent = message
  } else {
    errorSpan = document.createElement("span")
    errorSpan.className = 'error-message-block'
    errorSpan.textContent = message
    form.append(errorSpan)
  }
  return errorSpan
}

function modalOverlayToggle(action) {
  const modalOverlay = document.querySelector('.modal-overlay')

  if (modalOverlay) {
    if (action === 'open') {
      modalOverlay.classList.remove('modal-overlay_hidden')
    } else if (action === 'close') {
      modalOverlay.classList.add('modal-overlay_hidden')
    }
  } else if (action === 'open') {
    document.body.insertAdjacentHTML('beforeend', `
      <div class="modal-overlay">
          <div class="delete-modal">
              <h3 class="delete-modal__question">
                  Вы действительно хотите удалить эту задачу?
              </h3>
              <div class="delete-modal__buttons">
                  <button class="delete-modal__button delete-modal__cancel-button">
                      Отмена
                  </button>
                  <button class="delete-modal__button delete-modal__confirm-button">
                      Удалить
                  </button>
              </div>
          </div>
      </div>
    `)
  }
}

function onTaskRemove({target}) {
  const taskId = target.dataset.deleteTaskId
  if (target.closest('.task-item__delete-button')) {
    modalOverlayToggle('open')
    const deleteModalBtn = document.querySelector('.delete-modal__buttons')
    deleteModalBtn.addEventListener('click', (event) => removeTask(event, taskId))

  }
}

function removeTask(event, taskId) {
  if (event.target.closest('.delete-modal__button')) {
    if (event.target.innerText === 'Отмена') {
      modalOverlayToggle('close')
    } else if (event.target.innerText === 'Удалить') {
      tasks = tasks.filter(task => task.id !== taskId)
      render()
      modalOverlayToggle('close')
    }
  }
}



