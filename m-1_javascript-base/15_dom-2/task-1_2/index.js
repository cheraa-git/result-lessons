const tasks = [
  {id: '1138465078061', completed: true, text: 'Посмотреть новый урок по JavaScript'},
  {id: '1138465078062', completed: true, text: 'Выполнить тест после урока'},
  {id: '1138465078063', completed: false, text: 'Выполнить ДЗ после урока'},
]
const form = document.querySelector('.create-task-block')
const input = form.elements.taskName
const errSpan = addErrorSpan()


form.addEventListener('submit', onSubmit)
render()

function onSubmit(event) {
  event.preventDefault()
  addErrorSpan()


  const newTask = {id: `${Date.now()}`, completed: false, text: input.value}
  if (!input.value) {
    addErrorSpan('Название задачи не должно быть пустым')
    errSpan.textContent = 'Название задачи не должно быть пустым'
  } else if (tasks.find(task => task.text === input.value)) {
    addErrorSpan('Задача с таким названием уже существует')
  } else {
    errSpan.remove()
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
              <button class="task-item__delete-button default-button delete-button" data-delete-task-id="5">
                  Удалить
              </button>
          </div>
    </div>`
  )
}

function addErrorSpan(message = '') {
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




