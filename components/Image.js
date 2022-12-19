import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Context } from '../Context'
import useHover from '../hooks/useHover'
import HeartIcon from './HeartIcon'
import CartIcon from './CartIcon'

function Image({ className, img }) {
  const [hovered, ref] = useHover()

  const { selectPhoto } = useContext(Context)

  return (
    <div className={`${className} image-container`} ref={ref}>
      <img
        src={img.url}
        className="image-grid"
        onClick={() => selectPhoto(img)}
      />
      <HeartIcon hovered={hovered} img={img} />
      <CartIcon hovered={hovered} img={img} />
    </div>
  )
}
Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    url: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }).isRequired,
}

export default Image
