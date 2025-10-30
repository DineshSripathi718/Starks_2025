import {createRoot} from 'react-dom/client'
import App from './App'
import Component1 from './Component1'



const rootElement = document.getElementById('root')
console.log(rootElement)


createRoot(rootElement).render(
  <App />
)