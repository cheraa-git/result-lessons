import './index.css'
import {DonatesPage} from "./src/DonatesPage"


const donates = [
  {date: 'July 6th 2021, 10:28:49 am', amount: 4},
  {date: 'July 6th 2021, 10:28:49 am', amount: 20},
  {date: 'July 6th 2021, 10:28:49 am', amount: 3},
  {date: 'July 6th 2021, 10:28:49 am', amount: 1},
]

const donatesPage = new DonatesPage(donates)

donatesPage.render()


