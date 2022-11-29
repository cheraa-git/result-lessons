const hero = {
  name: 'Batman',
  health: 100,
  heatEnemy: (enemy) => enemy.health -= 10
}
const enemy = {
  name: 'Joker',
  health: 100,
  heatHero: (hero) => hero.health -= 10
}

function getRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const startGame = (heroPlayer, enemyPlayer) => {
  while (heroPlayer.health > 0 && enemyPlayer.health > 0) {
    if (getRandomNumberInRange(0, 1)) enemyPlayer.heatHero(heroPlayer)
    else heroPlayer.heatEnemy(enemyPlayer)
  }
  const {name, health} = heroPlayer.health > 0 ? heroPlayer : enemyPlayer

  alert(`${name} победил! У него осталось ${health} здоровья`)
}

startGame(hero, enemy)

