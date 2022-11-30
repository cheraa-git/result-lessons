const attacker = {
  archer: 30,
  footSoldier: 55,
  cavalry: 10,
  artillery: 3,
  checkChancesToWin(defenderObject) {
    const chance = Object.keys(defenderObject).reduce((acc, key) => {
      if (this[key] > defenderObject[key]) {
        return ++acc
      } else {
        return acc
      }
    }, 0)
    return [chance, Object.keys(defenderObject).length]
  },
  improveArmy() {
    Object.keys(this).forEach(key => {
      if (typeof this[key] === "number") {
        this[key] += 5
      }
    })
  },
  attack(defenderObject) {
    const [ourArmyChances, maximumChances] = this.checkChancesToWin(defenderObject)
    if (ourArmyChances / maximumChances < 0.7) {
      console.log(`Наши шансы равны ${ourArmyChances}/${maximumChances}. Необходимо укрепление`)
      this.improveArmy()
    } else {
      console.log('Мы усилились! Мы несомненно победим! Наши шансы высоки!')
    }
  }
}

const defender = {
  archer: 33,
  footSoldier: 50,
  cavalry: 40,
  artillery: 10,
}

attacker.attack(defender) // Наши шансы равны 1/4. Необходимо укрепление!
attacker.attack(defender) // Наши шансы равны 2/4. Необходимо укрепление!
attacker.attack(defender) // Мы усилились! Мы несомненно победим! Наши шансы высоки!
