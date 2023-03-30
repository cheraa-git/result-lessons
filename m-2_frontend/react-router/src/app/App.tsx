import React from 'react'
import { Navbar } from './components/Navbar'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Dashboard } from './components/dashboard'
import { Login } from './components/login'
import { Home } from './components/home'
import { Posts } from './components/posts'
import { NotFound } from './components/not-found'

function App() {

  return (
    <>
      <Navbar/>
      <h1>App</h1>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/login" component={Login}/>
        <Route path="/posts/:postId?" component={Posts}/>
        <Route path="/404" component={NotFound}/>
        <Redirect from="/admin" to="/dashboard"/>
        <Redirect to="/404"/>
      </Switch>
    </>
  )
}

export default App
