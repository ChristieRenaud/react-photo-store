import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Cart from './pages/Cart'
import Photos from './pages/Photos'
import Favorites from './pages/Favorites'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Photos />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
      </Switch>
    </div>
  )
}

export default App
