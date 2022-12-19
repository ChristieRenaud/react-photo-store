import React, { useState, useContext } from 'react'
import { Context } from '../Context.js'

function HeartIcon({ img, hovered }) {
  const { toggleFavorite, favorites, selectedPhoto } = useContext(Context)

  if (favorites.some((favorite) => favorite.id === img.id)) {
    return (
      <i
        className="ri-heart-fill favorite"
        onClick={() => toggleFavorite(img)}
      ></i>
    )
  } else if (hovered || img === selectedPhoto) {
    return (
      <i
        className="ri-heart-line favorite"
        onClick={() => toggleFavorite(img)}
      ></i>
    )
  } else return null
}

export default HeartIcon
