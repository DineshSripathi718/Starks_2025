import {createRoot} from 'react-dom/client'
import App from './App'
import Component1 from './Component1'
import EventList from './EventListeners/EventList'



const rootElement = document.getElementById('root')
console.log(rootElement)


createRoot(rootElement).render(
  // <App />
  <EventList></EventList>
)