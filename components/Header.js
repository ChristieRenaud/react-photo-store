import React from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../Context'

function Header() {
  const { cartItems, favorites } = React.useContext(Context)

  const cartClassName =
    cartItems.length > 0 ? 'ri-shopping-cart-fill' : 'ri-shopping-cart-line'
  const heartClassName =
    favorites.length > 0 ? 'ri-heart-fill' : 'ri-heart-line'
  return (
    <header>
      <Link to="/">
        <h2>Pic Some</h2>
      </Link>
      <div className="nav-buttons">
        <Link to="/favorites" className="heart-icon-lg">
          <i className={`${heartClassName} ri-fw ri-2x`}></i>
        </Link>
        <Link to="/cart">
          <i className={`${cartClassName} ri-fw ri-2x`}></i>
        </Link>
      </div>
    </header>
  )
}

export default Header
