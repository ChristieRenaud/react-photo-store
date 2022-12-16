import React, { useState, useContext } from 'react'
import { Context } from '../Context.js'

function CartIcon({ img, hovered }) {
  const { cartItems, selectedPhoto, addToCart, removeFromCart } = useContext(
    Context,
  )
  const alreadyInCart = cartItems.some((cartItem) => cartItem.id === img.id)
  if (alreadyInCart) {
    return (
      <i
        className="ri-shopping-cart-fill cart"
        onClick={() => removeFromCart(img.id)}
      ></i>
    )
  } else if (hovered || img === selectedPhoto) {
    return (
      <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
    )
  } else {
    return null
  }
}

export default CartIcon
