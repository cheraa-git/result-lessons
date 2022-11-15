
// function getSumOfSequence(number) {
//   const arr = Array.from({length: number}, (_, i) => 1 + i)
//   return arr[0] + arr.at(-1)
// }

function getSumOfSequence(number) {
  const arr = []
  for (let i = 1; i <=number; i++) {
    arr.push(i)
  }
  return arr[0] + arr.at(-1)
}

console.log(getSumOfSequence(5))
