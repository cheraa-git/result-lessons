import React, { FC } from 'react'
import { Link, Route } from 'react-router-dom'
import { Stats } from './stats'
import { Edit } from './edit'

export const Dashboard: FC = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        <li>
          <Link to="/dashboard/edit">Edit</Link>
        </li>
        <li>
          <Link to="/dashboard/">Dashboard</Link>
        </li>
      </ul>
      <Route exact path="/dashboard" component={Stats}/>
      <Route path="/dashboard/edit" component={Edit}/>
    </div>
  )
}
