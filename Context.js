import React, { useState, useEffect } from 'react'

const Context = React.createContext()

function ContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([])
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem('cartItems')) || [],
  )
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem('favorites')) || [],
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

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])
  function addToFavorites(item) {
    setFavorites((prevFavorites) => [...prevFavorites, item])
  }
  function removeFromFavorites(id) {
    setFavorites((prevFavorites) => {
      return prevFavorites.filter((favorite) => favorite.id !== id)
    })
  }

  function toggleFavorite(item) {
    if (favorites.some((favorite) => favorite.id === item.id)) {
      removeFromFavorites(item.id)
    } else {
      addToFavorites(item)
    }
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
        favorites,
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
