import React, { useContext } from 'react'
import HeartIcon from './HeartIcon'
import CartIcon from './CartIcon'
import { Context } from '../Context'

function FeaturedPhoto() {
  const { selectedPhoto, deselectPhoto } = useContext(Context)

  return (
    <div className="large-img-container">
      <img src={selectedPhoto.url} className="large-img" />
      <i className="ri-close-line" onClick={() => deselectPhoto()}></i>
      <HeartIcon img={selectedPhoto} />
      <CartIcon img={selectedPhoto} />
    </div>
  )
}

export default FeaturedPhoto
