function getRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

function getWinner(applicants, winnerObject) {
  const winnerIndex = getRandomNumberInRange(0, Object.keys(applicants).length)
  let res = {}
  Object.keys(applicants).forEach((winnerKey, i) => {
    if (i === winnerIndex) {
      res = {...winnerObject, ...applicants[winnerKey]}
    }
  })
  return res

}

const todaysWinner = {
  prize: '10 000$',
}

const winnerApplicants = {
  '001': {
    name: 'Максим',
    age: 25,
  },
  '201': {
    name: 'Светлана',
    age: 20,
  },
  '304': {
    name: 'Екатерина',
    age: 35,
  },
}

const resultWinner = getWinner(winnerApplicants, todaysWinner)
console.log('resultWinner', resultWinner)
// { prize: '10 000$', name: 'Максим', age: 25 }