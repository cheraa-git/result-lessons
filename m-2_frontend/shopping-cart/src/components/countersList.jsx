import {Counter} from "./counter"
import {useState} from "react"

export const CountersList = () => {
  const initialState = [
    {id: 0, value: 0, name: 'Ненужная вещь'},
    {id: 1, value: 0, name: 'Ложка'},
    {id: 2, value: 0, name: 'Вилка'},
    {id: 3, value: 0, name: 'Тарелка'},
    {id: 4, value: 0, name: 'Набор минималиста'},
  ]

  const [counters, setCounters] = useState(initialState)

  const handleDelete = (id) => {
    setCounters(prev => prev.filter(counter => counter.id !== id))
  }

  const handleReset = () => {
    setCounters(initialState)
  }

  const handleIncrement = (id) => {
    const updatedCounters = counters.map(counter => {
      if (counter.id === id) {
        counter.value++
      }
      return counter
    })
    setCounters(updatedCounters)
  }

  const handleDecrement = (id) => {
    const updatedCounters = counters.map(counter => {
      if (counter.id === id) {
        counter.value--
      }
      return counter
    })
    setCounters(updatedCounters)
  }


  return (
    <>
      {counters.map(counter => (
        <Counter key={counter.id}
                 {...counter}
                 onDelete={handleDelete}
                 onIncrement={() => handleIncrement(counter.id)}
                 onDecrement={() => handleDecrement(counter.id)}/>
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Сброс</button>
    </>
  )
}
