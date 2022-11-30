class CarService {
  static DefaultWorkingHours = {
    from: '9:00',
    till: '20:00'
  }

  constructor(name, workingHours) {
    this.name = name
    this.workingHours = workingHours || CarService.DefaultWorkingHours
  }

  repairCar(carName) {
    if (!carName) return console.error('Вам необходимо указать название машины, чтобы ее отремонтировать')

    const parseTime = (date) => ({
      fromService: +this.workingHours.from.split(':')[0] * 60 + +this.workingHours.from.split(':')[1],
      tillService: +this.workingHours.till.split(':')[0] * 60 + +this.workingHours.till.split(':')[1],
      dateNow: date.getHours() * 60 + date.getMinutes()
    })

    console.log(parseTime(new Date()))
    const {fromService, tillService, dateNow} = parseTime(new Date())

    if (dateNow < fromService || dateNow > tillService) {
      console.log('К сожалению, мы сейчас закрыты. Приходите завтра')
    } else {
      console.log(`Сейчас отремонтируем вашу машину ${carName}! Ожидайте пожалуйста`)
    }


  }
}

// Примечание про минуты прочитал после того, как сделал :)
const q = new CarService('RepairCarNow', {from: '10:30', till: '19:45'})
q.repairCar('BMW')
