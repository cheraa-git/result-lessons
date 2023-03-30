import {NavLink} from "react-router-dom"

export const StudentCardPage = () => {
  return (
    <div>
      Main
      <NavLink className="btn btn-primary" to="/edit">Добавить</NavLink>
    </div>
  )
}
