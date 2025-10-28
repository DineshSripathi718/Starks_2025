import './App.css'
import Header from './header/Header'
import Contacts from './Main/Contacts'

function App() {
  console.log("App Component")
  return (
    <>
      <Header></Header>
      <main>
        <Contacts></Contacts>
      </main>
    </>
  )
}

export default App
