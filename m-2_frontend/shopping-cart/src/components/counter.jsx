export const Counter = (props) => {
  const {value, onDelete, onIncrement, onDecrement} = props

  const formatCount = () => {
    return value === 0 ? 'empty' : value
  }
  const getBadgeClasses = () => {
    let classes = 'badge m-2 '
    classes += value === 0 ? 'bg-warning' : 'bg-primary'
    return classes
  }

  return (
    <div>
      <span>{props.name}</span>
      <span className={getBadgeClasses()}>{formatCount()}</span>
      <button className="btn btn-primary btn-sm m-2" onClick={onIncrement}>+</button>
      <button className="btn btn-primary btn-sm m-2" onClick={onDecrement}>-</button>
      <button className="btn btn-danger btn-sm m-2" onClick={() => onDelete(props.id)}>Delete</button>
    </div>
  )
}
