import React, { useState, useEffect } from 'react'

const Context = React.createContext()

function ContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([])
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem('cartItems')) || [],
  )
  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const url =
    'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setAllPhotos(data))
  }, [])

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems])
  function toggleFavorite(id) {
    setAllPhotos((prevArray) =>
      prevArray.map((img) => {
        if (img.id === id) {
          return { url: img.url, id: img.id, isFavorite: !img.isFavorite }
        } else {
          return img
        }
      }),
    )
  }

  function selectPhoto(item) {
    setSelectedPhoto(item)
  }

  function deselectPhoto() {
    setSelectedPhoto(null)
  }
  function addToCart(item) {
    setCartItems((prevCart) => [...prevCart, item])
  }

  function removeFromCart(id) {
    setCartItems((prevCart) => {
      return prevCart.filter((cartItem) => cartItem.id !== id)
    })
  }

  function emptyCart() {
    setCartItems([])
  }

  return (
    <Context.Provider
      value={{
        allPhotos,
        cartItems,
        toggleFavorite,
        addToCart,
        removeFromCart,
        emptyCart,
        selectedPhoto,
        selectPhoto,
        deselectPhoto,
      }}
    >
      {children}
    </Context.Provider>
  )
}
export { Context, ContextProvider }
