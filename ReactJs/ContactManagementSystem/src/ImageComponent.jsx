import React from 'react'

import bird from './assets/image2.jpg'
import lizard from '/public/image1.jpg'

function ImageComponent() {
  return (
    <div>
        <img src={bird} alt="image2" />
        <img src={lizard} alt="image2" />
    </div>
  )
}

export default ImageComponent