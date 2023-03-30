import { FC } from 'react'
import { Link } from 'react-router-dom'

export const Navbar: FC = () => {
  return (
    <nav>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/posts">Posts</Link></li>
      <li><Link to="/dashboard">Dashboard</Link></li>
    </nav>
  )
}
