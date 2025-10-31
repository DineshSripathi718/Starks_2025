import React from 'react'
import './ContactCard.css'

import contactImage from '../assets/image2.jpg'

function ContactCard(prop) {
  console.log(prop)
  return (
    <div className='contactCard'>
        <div className="imageContainer">
            <img src={prop.image} alt="" />
        </div>
        <div className="detailsContainer">
            <div className="name">{prop.name || "Tom"}</div>
            <div className="number">{prop.phone || "00000000000"}</div>
            <p>
              {prop.children}
            </p>
            <div className="button">
                <button>view contact</button>
            </div>
        </div>
    </div>
  )
}

export default ContactCard