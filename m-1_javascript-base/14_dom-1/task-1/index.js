document.body.innerHTML = `
<form class="create-user-form">
    <label>
        Имя
        <input type="text" name="userName" placeholder="Введите ваше имя">
    </label>
    <label>
        Пароль
        <input type="password" name="password" placeholder="Придумайте Пароль">
    </label>
    <button type="submit">
        Подтвердить
    </button>
</form>`
document.body.innerHTML = ''

const form = document.createElement('form')
form.className = 'create-user-form'

const name = document.createElement("label")
const nameInp = document.createElement('input')
nameInp.type = 'text'
nameInp.name = 'userName'
nameInp.placeholder = 'Введите ваше имя'
name.append('Имя', nameInp)

const password = document.createElement("label")
const passwordInp = document.createElement('input')
passwordInp.type = 'password'
passwordInp.name = 'password'
passwordInp.placeholder = 'Придумайте Пароль'
password.append('Пароль', passwordInp)

const submitBtn = document.createElement('button')
submitBtn.type = 'submit'
submitBtn.textContent = 'Подтвердить'

form.append(name, password, submitBtn)

document.body.append(form)
