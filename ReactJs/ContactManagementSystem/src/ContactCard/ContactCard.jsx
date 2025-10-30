import React from 'react'
import './ContactCard.css'

import contactImage from '../assets/image2.jpg'

function ContactCard() {
  return (
    <div className='contactCard'>
        <div className="imageContainer">
            <img src={contactImage} alt="" />
        </div>
        <div className="detailsContainer">
            <div className="name">Gorege Gorggy</div>
            <div className="number">7890717829</div>
            <div className="button">
                <button>view contact</button>
            </div>
        </div>
    </div>
  )
}

export default ContactCard