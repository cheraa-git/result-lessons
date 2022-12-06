const tasks = [
  {id: '1138465078061', completed: true, text: 'Посмотреть новый урок по JavaScript'},
  {id: '1138465078062', completed: true, text: 'Выполнить тест после урока'},
  {id: '1138465078063', completed: false, text: 'Выполнить ДЗ после урока'},
]

tasks.forEach(task => {
  const taskHtml = document.createElement('div')
  taskHtml.className = "task-item"
  taskHtml.dataset.taskId = task.id
  taskHtml.innerHTML = `
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
      </div>`
  document.querySelector('.tasks-list').append(taskHtml)
})
