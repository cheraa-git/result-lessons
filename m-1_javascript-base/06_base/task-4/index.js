// FOR
console.log('for')
for (let i = 0; i < 3; i += 1) {
  let newStudent = prompt('Введите имя нового студента!')
  if (newStudent) {
    newStudent = newStudent.trim()
    alert(`Добро пожаловать, ${newStudent}!`)
  }
}

// WHILE
console.log('while')
let count1 = 0
while (count1 < 3) {
  count1++
  let newStudent = prompt('Введите имя нового студента!')
  if (newStudent) {
    newStudent = newStudent.trim()
    alert(`Добро пожаловать, ${newStudent}!`)
  }
}

// DO...WHILE
console.log('do...while')
let count2 = 0
do {
  count2++
  let newStudent = prompt('Введите имя нового студента!')
  if (newStudent) {
    newStudent = newStudent.trim()
    alert(`Добро пожаловать, ${newStudent}!`)
  }
} while (count2 < 3)

