const sum = (...args) => args.reduce((acc, arg) => acc + arg)

console.log(sum(1, 2, 3)) // 6
console.log(sum(2, 2)) // 4
console.log(sum(10, 15, 249, 653, 846)) // 1773