import React, { useContext } from 'react'
import Image from '../components/Image'
import FeaturedPhoto from '../components/FeaturedPhoto'
import { Context } from '../Context'
import { getClass } from '../utils'

function Photos() {
  const { allPhotos, selectedPhoto } = useContext(Context)
  const imageElements = allPhotos.map((img, i) => (
    <Image key={img.id} img={img} className={getClass(i)} />
  ))

  return (
    <main>
      {selectedPhoto && <div className="overlay"></div>}
      {selectedPhoto && <FeaturedPhoto />}
      <div className="photos">{imageElements}</div>
    </main>
  )
}

export default Photos
