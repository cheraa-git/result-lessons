const peopleWithVisa = [
  {
    firstName: 'Stasia',
    lastName: 'Ward',
    criminalRecord: true,
    passportExpiration: '19.06.2040',
  },
  {
    firstName: 'Elliot',
    lastName: 'Baker',
    criminalRecord: false,
    passportExpiration: '04.06.2041',
  },
  {
    firstName: 'Leighann',
    lastName: 'Scott',
    criminalRecord: true,
    passportExpiration: '31.07.2039',
  },
  {
    firstName: 'Nick',
    lastName: 'Pop',
    criminalRecord: false,
    passportExpiration: '31.12.2010',
  },
]

const parseDate = date => {
  const [day, month, year] = date.split('.')
  return new Date(+year, +month - 1, +day).getTime()
}

const allowVisa = (peoples) => peoples.filter((people) => {
  if (!people.criminalRecord && Date.now() < parseDate(people.passportExpiration)) {
    return people
  }

})


const result = allowVisa(peopleWithVisa)
console.log('result', result)