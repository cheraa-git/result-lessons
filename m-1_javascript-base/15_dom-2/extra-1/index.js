class CustomSelect {
  #id
  #options
  #currentSelectedOption

  constructor(id, options) {
    this.#id = id
    this.#options = options
  }

  get selectedValue() {
    return this.#currentSelectedOption
  }

  render(container) {
    container.insertAdjacentHTML('beforeend', `<div class="select-dropdown select-dropdown--${this.#id}">
         <button class="select-dropdown__button select-dropdown__button--${this.#id}"> 
            <span class="select-dropdown__text select-dropdown__text--${this.#id}">Выберите элемент</span>
         </button>
        <ul class="select-dropdown__list select-dropdown__list--${this.#id}"> 
           ${
      this.#options.map((li) => `<li class="select-dropdown__list-item" data-value="${li.value}">${li.text}</li>`
      )}
        </ul> 
      </div>`)
    const dropdownBtn = container.querySelector('.select-dropdown__button')
    const dropdownList = container.querySelector('.select-dropdown__list')

    dropdownBtn.addEventListener('click', () => {
      if (dropdownList.classList.contains('active')) {
        dropdownList.classList.remove('active')
      } else {
        dropdownList.classList.add('active')
      }
    })

    dropdownList.addEventListener('click', (event) => {
      const option = event.target.closest('.select-dropdown__list-item')
      if (option) {
        this.#currentSelectedOption = this.#options.find(el => +el.value === +option.dataset.value)
        container.querySelector('.select-dropdown__text').innerText = this.#currentSelectedOption.text
        dropdownList.classList.remove('active')
        dropdownList.querySelectorAll('.select-dropdown__list-item').forEach(el => el.classList.remove('selected'))
        option.classList.add('selected')
      }
    })
  }
}

const options = [
  {value: 1, text: 'JavaScript'},
  {value: 2, text: 'NodeJS'},
  {value: 3, text: 'ReactJS'},
  {value: 4, text: 'HTML'},
  {value: 5, text: 'CSS'}
]

const customSelect = new CustomSelect('123', options)
const mainContainer = document.querySelector('#container')
customSelect.render(mainContainer)


