const clientsEstimations = []

function askClientToGiveEstimation() {
  const response = Number(prompt('Как вы оцениваете нашу кофейню от 1 до 10?').trim())
  if (response > 0 && response <= 10) {
    clientsEstimations.push(response)
  }
}

for (let i = 0; i < 5; i++) {
  askClientToGiveEstimation()
}

const goodEstimations = clientsEstimations.filter(est => est > 5)
const notGoodEstimations = clientsEstimations.filter(est => est <= 5)

alert(`Всего положительных оценок: ${goodEstimations.length};\
 Всего отрицательных оценок: ${notGoodEstimations.length}`)