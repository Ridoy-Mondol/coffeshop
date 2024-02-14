import './App.css'
import Api from './components/Api'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Gallery from './components/Gallery'
import Service from './components/Service'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
import Footer1 from './components/Footer1'
import Footer2 from './components/Footer2'
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
   <>
    <Navbar />
    <Routes>
      <Route exact path='/' element = {<Home data = {Api}/>} />
      <Route exact path='/about' element = {<About/>} />
      <Route exact path='/gallery' element = {<Gallery/>} />
      <Route exact path='/service' element = {<Service/>} />
      {/* <Route exact path='/testimonial' element = {<Testimonial/>} /> */}
      <Route exact path='/contact' element = {<Contact/>} />
    </Routes>
    <Footer1 />
    <Footer2 />
   </>
  )
}

export default App
