const ordersArr = [4, 2, 1, 3]
const people = [
  {id: 1, name: "Максим"},
  {id: 2, name: "Николай"},
  {id: 3, name: "Ангелина"},
  {id: 4, name: "Виталий"},
]

const giveTalonsInOrder = (patients, orders) => {
  const res = []
  orders.forEach((ord) => res.push(patients[ord - 1]))
  return res
}

console.log(giveTalonsInOrder(people, ordersArr))