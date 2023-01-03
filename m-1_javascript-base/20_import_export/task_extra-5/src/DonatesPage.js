import moment from "moment"

export class DonatesPage {
  #donates
  #totalAmount = 0
  #donateForm = document.querySelector('.donate-form')
  #donateInput = this.#donateForm.querySelector('.donate-form__donate-input')
  #donatesContainer = document.querySelector('.donates-container__donates')

  constructor(initialDonates = []) {
    this.#donates = initialDonates
  }

  addDonate(date, amount) {
    amount = Number(amount)
    const donateItemHtml = `<div class="donate-item">${date} - <b>${amount}$</b></div>`
    this.#donatesContainer.insertAdjacentHTML('beforeend', donateItemHtml)
    this.#donateInput.value = ''
    this.#totalAmount += amount
    this.#donateForm.querySelector('#total-amount').textContent = `${this.#totalAmount}$`
  }

  #addBtnListener() {
    this.#donateForm.addEventListener('submit', (e) => {
      e.preventDefault()
      const formatDate = moment().format('MMMM Do YYYY, h:mm:ss a')
      this.addDonate(formatDate, this.#donateInput.value)
    })
  }


  render() {
    this.#donates.forEach(({date, amount}) => {
      this.addDonate(date, amount)
    })
    this.#addBtnListener()
  }
}
