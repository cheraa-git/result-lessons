let health = +(prompt('Введите число параметра "здоровье" для персонажа').trim())

if (health < 0 || !health) {
  console.log(health)
  alert('Параметр "здоровье" должен быть больше нуля!')
} else {
  console.log('health > 0',health)
  alert(`Параметр "здоровье" равен ${health}`)
}