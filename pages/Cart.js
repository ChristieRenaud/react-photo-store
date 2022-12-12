import React, { useContext, useState } from 'react'
import { Context } from '../Context.js'
import CartItem from '../components/CartItem.js'

function Cart() {
  const { cartItems, emptyCart } = useContext(Context)
  const [buttonText, setButtonText] = useState('Place Order')
  const cartItemElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ))
  const totalCost = 5.99 * cartItems.length
  const totalCostDisplay = totalCost.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  function placeOrder() {
    setButtonText('Ordering...')
    setTimeout(() => {
      emptyCart()
      setButtonText('Place Order')
    }, '3000')
  }
  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">Total: {totalCostDisplay} </p>
      {cartItems.length > 0 ? (
        <div className="order-button">
          <button onClick={placeOrder}>{buttonText}</button>
        </div>
      ) : (
        <p>You have no items in your cart.</p>
      )}
    </main>
  )
}

export default Cart
