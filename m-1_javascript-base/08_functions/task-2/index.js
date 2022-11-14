const getSumOfNumbers = (number, type = 'odd') => {
    if (typeof number !== 'number') return NaN

    let result = 0
    for (let i = 0; i <= number; i++) {
        if (type === 'odd') {
            result += (i % 2 !== 0) ? i : 0

        } else if (type === 'even') {
            result += (i % 2 === 0) ? i : 0

        } else if (type === '') {
            result += i
        }
    }
    return result
}


console.log(getSumOfNumbers(10, ''))