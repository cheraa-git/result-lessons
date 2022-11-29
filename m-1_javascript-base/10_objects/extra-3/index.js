const getKiller = (suspectInfo, deadPeople) => {
  const killers = []
  for (let suspect in suspectInfo) {
    const comparison = new Set([...suspectInfo[suspect], ...deadPeople])

    if (comparison.size === suspectInfo[suspect].length) killers.push(suspect)

  }
  return `Предполагаемые убийцы: ${killers.join(', ')}`
}

console.log(
  getKiller(
    {
      James: ["Jacob", "Bill", "Lucas"],
      Johnny: ["David", "Kyle", "Lucas"],
      Peter: ["Lucy", "Kyle"],
      Andrew: ["Bill", "Kyle", "Lucy", "Lucas"]
    },
    ["Lucas", "Bill"]
  )
) // Предполагаемые убийцы: James, Andrew

console.log(
  getKiller(
    {
      Brad: [],
      Megan: ["Ben", "Kevin"],
      Finn: []
    },
    ["Ben"]
  )
) // Предполагаемые убийцы: Megan