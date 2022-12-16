import React, { useState, useContext } from 'react'
import { Context } from '../Context.js'
import { useHover } from '../hooks/useHover'

function HeartIcon({ img, hovered }) {
  // const [hovered, ref] = useHover
  const { allPhotos, toggleFavorite, selectedPhoto } = useContext(Context)
  if (img.isFavorite) {
    return (
      <i
        className="ri-heart-fill favorite"
        onClick={() => toggleFavorite(img.id)}
      ></i>
    )
  } else if (hovered || img === selectedPhoto) {
    return (
      <i
        className="ri-heart-line favorite"
        onClick={() => toggleFavorite(img.id)}
      ></i>
    )
  } else return null
}

export default HeartIcon
