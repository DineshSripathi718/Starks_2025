import React from 'react'

import Component1 from './Component1'
import './App.css'
import ImageComponent from './ImageComponent'
import ContactCard from './ContactCard/ContactCard'
/* component1.css */

import image1 from '/public/image1.jpg'


function App() {
  return (
    <div className = "app">
      <div className="cards-container">
        <ContactCard 
          image = "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000" 
          name="Sparrow" 
          phone="789002992">
              <h1>Dummy content</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur quidem rem, quia quas, consequatur repellat obcaecati error maxime fugiat odit quisquam sequi ea. Incidunt totam eos facilis? Accusantium, aut iusto!
              </p>
          </ContactCard>
        <ContactCard image = {image1}></ContactCard>
        <ContactCard>
          content
        </ContactCard>
        <ContactCard></ContactCard>
        <ContactCard></ContactCard>
        <ContactCard></ContactCard>
        <ContactCard></ContactCard>
        <ContactCard></ContactCard>
        <Component1></Component1>
      </div>
      <h2>App component</h2>
      <ImageComponent></ImageComponent>
    </div>
  )
}

export default App