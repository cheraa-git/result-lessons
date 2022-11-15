const numbers = [10, 4, 100, -5, 54, 2]
let result = 0

// FOR
for (let i = 0; i < numbers.length; i++) {
  result += numbers[i] ** 3
}
console.log('for',result)

// FOR..OF
result = 0
for (let numb of numbers) {
  result += numb ** 3
}
console.log('for...of', result)

// forEach
result = 0
numbers.forEach(numb => {
  result += numb ** 3
})
console.log('forEach', result)

// reduce
result = numbers.reduce((acc, numb) => acc + numb ** 3, 0)
console.log('reduce', result)