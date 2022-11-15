const coffees = ['Latte', 'Cappuccino', 'Americano']
const coffeeName = prompt('Поиск кофе по названию:').trim()

const findCoffeeIndex = coffees.findIndex((coffee) => coffee.toLowerCase() === coffeeName.toLowerCase())

if (findCoffeeIndex >= 0) {
  alert(`Держите ваш любимый кофе ${coffees[findCoffeeIndex]}.\
  Он ${findCoffeeIndex + 1}-й по популярности в нашей кофейне`)
} else  {
  alert('К сожалению, такого вида кофе нет в наличии')
}
