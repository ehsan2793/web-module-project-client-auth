import React from 'react'
import { Switch, Route, Link } from "react-router-dom";
import Home from './componets/Home'
const App = () => {
  return (
    <div className={'App'}>
      <nav className="header-nav">
        <h1>Firends List </h1>
        <div className="nav-links">
          <Link to={'/'}>Home</Link>
          <Link to={'/login'}>LogIn</Link>
          <Link to={'/Logout'}>LogOut</Link>
        </div>

      </nav>

      <Switch>
        <Route path={'/'} component={Home} />
      </Switch>




    </div>
  )
}

export default App
