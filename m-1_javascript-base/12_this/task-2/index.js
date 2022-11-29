const dog = {
  name: 'Чарли',
  type: 'Собака',
  makeSound() {
    return 'Гав-Гав'
  }
}

const bird = {
  name: 'Петя',
  type: 'Воробей',
  makeSound() {
    return 'Чик-чирик'
  }
}

function makeDomestic(isDomestic) {
  console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`)
  return {...this, isDomestic}
}

const makeDomesticDog = makeDomestic.bind(dog, true)
console.log(makeDomesticDog())

console.log(makeDomestic.call(bird, false))

console.log(makeDomestic.apply(bird, [false]))
