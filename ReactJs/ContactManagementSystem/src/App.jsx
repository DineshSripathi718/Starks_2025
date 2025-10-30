import React from 'react'

import Component1 from './Component1'
import './App.css'
import ImageComponent from './ImageComponent'
import ContactCard from './ContactCard/ContactCard'
/* component1.css */


function App() {
  return (
    <div className = "app">
      <div className="cards-container">
        <ContactCard></ContactCard>
        <ContactCard></ContactCard>
        <ContactCard></ContactCard>
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