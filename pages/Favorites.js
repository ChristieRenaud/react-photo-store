import React, { useState, useContext } from 'react'
import HeartIcon from '../components/HeartIcon'
import CartIcon from '../components/CartIcon'
import { Context } from '../Context'
import useHover from '../hooks/useHover'

function Favorites() {
  const { favorites } = useContext(Context)

  const imageElements = favorites.map((favorite) => {
    return (
      <div className="favorite-item" key={favorite.id}>
        <img src={favorite.url} className="favorites-img"></img>
        <HeartIcon img={favorite} />
        <CartIcon img={favorite} favoritesPage={true} />
      </div>
    )
  })
  return (
    <main className="favorites-page">
      <h1>Favorite Images</h1>
      <div className="favorites-container">{imageElements}</div>
    </main>
  )
}

export default Favorites
