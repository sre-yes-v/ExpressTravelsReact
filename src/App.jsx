import './App.css'

import Destination from './assets/Components/Destination/Destination'
import Header from './assets/Components/Header/Header'
import Navbar from './assets/Components/NavBar/Navbar'
import Services from './assets/Components/Services/Services'
import Reviews from './assets/Components/Reviews/Reviews'
import Gallery from './assets/Components/Gallery/Gallery'
import Footer from './assets/Components/Footer/Footer'



function App() {


  return (
    <>
      <Navbar/>
      <Header/>
      <Destination/>
      <Services/>
      <Reviews/>
      <Gallery/>
      <Footer/>
    </>
  )
}

export default App
