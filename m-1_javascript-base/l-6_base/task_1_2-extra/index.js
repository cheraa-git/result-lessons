const clientName = prompt('Введите имя клиента').trim()

let clientSpentForAllTime = +(prompt('Сколько клиент потратил за все время?').trim())
let clientSpentToday = +(prompt('Сколько клиент потратил сегодня?').trim())

if (!isNaN(clientSpentForAllTime) && !isNaN(clientSpentToday)) {
  let discount = 0
  
  if (clientSpentForAllTime < 300) {
    discount = 10
  } else if (clientSpentForAllTime >= 300 && clientSpentForAllTime < 500) {
    discount = 20
  } else if (500 <= clientSpentForAllTime) {
    discount = 30
  }

  clientSpentForAllTime += clientSpentToday
  clientSpentToday -= clientSpentToday * discount / 100

  alert(`Вам предоставляется скидка в ${discount}%`)
  alert(`Спасибо, ${clientName}! К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$`)
} else {
  alert('Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом! Перезагрузи страницу, чтобы повторить попытку.')
}

