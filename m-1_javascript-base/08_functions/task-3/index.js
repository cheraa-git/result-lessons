function getDivisorsCount(numb) {
    if (!numb || numb < 0 || !Number.isInteger(numb)) {
        alert('number должен быть целым числом и больше нуля!')
        return NaN
    }

    let count = 0
    for (let i = numb; i > 0; i--) {
        if (numb % i === 0) {
            count++
        }
    }
    return count
}

console.log(getDivisorsCount(30))