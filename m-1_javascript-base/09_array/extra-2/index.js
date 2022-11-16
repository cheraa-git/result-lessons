function getMathResult(expr) {
  const operators = [">", "<", "=", "+", "-", "*", "/"]

  expr = expr.reduce((acc, el) => {
    if (operators.includes(el)) acc.push(el)
    if (!isNaN(Number(el))) acc.push(+el)
    return acc
  }, [])

  if (
    expr.length !== 3
    || typeof expr[0] !== 'number'
    || !operators.includes(expr[1])
    || typeof expr[2] !== "number"
  ) return 'Ошибка'

  switch (expr[1]) {
    case '>': return expr[0] > expr[2]
    case '<': return expr[0] < expr[2]
    case '=': return expr[0] === expr[2]
    case '+': return expr[0] + expr[2]
    case '-': return expr[0] - expr[2]
    case '*': return expr[0] * expr[2]
    case '/': return expr[0] / expr[2]
  }
}


console.log(getMathResult(['100', 'hello', 'javascript', 'help200', '+', 4])) // 104
console.log(getMathResult(['200', '+', 300])) // 500
console.log(getMathResult(['20', '-', '5'])) // 15
console.log(getMathResult([100, '/', 100])) // 1
console.log(getMathResult([2, '-', 2])) // 0
console.log(getMathResult(['5', '>', '10'])) // false
console.log(getMathResult(['5', '<', '10'])) // true
console.log(getMathResult(['1', '=', 1])) // true
console.log(getMathResult(['1', '**', 1])) // 'Ошибка'
console.log(getMathResult(['+', '100', 10])) // 'Ошибка'
