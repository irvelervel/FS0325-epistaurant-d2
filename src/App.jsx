import './App.css'
// bootstrap è installata come dipendenza, ma al momento
// il suo foglio di stile minifizzato non è ancora importato da nessuna parte!
import 'bootstrap/dist/css/bootstrap.min.css'
import CustomNavbar from './components/CustomNavbar'
import Home from './components/Home'

function App() {
  return (
    <>
      {/* <CustomNavbar tema="light" /> */}
      <CustomNavbar tema="dark" />
      <Home />
    </>
  )
}

export default App
