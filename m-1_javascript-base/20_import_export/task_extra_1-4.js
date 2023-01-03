// ---- TASK 1 ----
function task1() {
  const arr = []
  for (let i = 1016; i <= 1937; i++) {
    if (
      i % 3 === 0
      && i % 7 === 0
      && i % 5 !== 0
      && i % 2 !== 0
    ) {
      arr.push(i)
    }
  }
  return arr.at(-1)
}

// console.log('task-1', task1()) // 1911


// ---- TASK 2 ----
function isEqualSymbols(str1, str2) {
  const sortedStr1 = str1.split('').sort().join('')
  const sortedStr2 = str2.split('').sort().join('')
  return sortedStr1 === sortedStr2
}

// console.log(isEqualSymbols('адрес', 'среда')) // true
// console.log(isEqualSymbols('ноутбук', 'программист')) // false


// ---- TASK 3 ----
function unique(arrayOfNumbers) {
  return [...new Set(arrayOfNumbers)]
}

// console.log(unique([1, 1, 2, 2, 4, 3, 2, 3, 7, 3, 3, 3])) // [ 1, 2, 4, 3, 7 ]


// ---- TASK 4 ----
function isPalindrome(str) {
  const reverseStr = [...str].reverse().join('')
  return str === reverseStr
}

// console.log(isPalindrome('racecar')) // true
// console.log(isPalindrome('programmer')) // false
// console.log(isPalindrome('топот')) // true
