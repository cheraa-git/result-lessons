const goals = [8, 1, 1, 3, 2, -1, 5]

const maxGoals = Math.max(...goals)
const indexOfMaxGoals = goals.indexOf(maxGoals) + 1
alert(
  `Самый результативный матч был под номером ${indexOfMaxGoals}.\
 В нем было забито ${maxGoals} гол(ов).`
)

const minGoals = Math.min(...goals.filter(goal => goal >= 0))
const indexesOfMinGoals = goals.reduce((acc, goal, index) => {
  if (goal === minGoals) {
    acc.push(index + 1)
  }
  return acc
}, [])
alert(
  `Самые не результативные матчи были под номерами ${indexesOfMinGoals}.\
 В каждом из них было забито по ${minGoals} мячу(а).`
)

const allGoals = goals.reduce((acc,goal) => goal >= 0 ? acc + goal : acc, 0)
alert(`Общее количество голов за сезон равно ${allGoals}`)


const isAfterLoss = !!(goals.filter(goal => goal < 0).length) ? 'да' : 'нет'
alert(`Были автоматические поражения: ${isAfterLoss}`)

alert(`Среднее количество голов за матч равно ${(allGoals / goals.length).toFixed(1) }`)

alert(`Сортировка в порядке возрастания: ${[...goals].sort().join(', ')}`)



