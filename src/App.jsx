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
import Error from './components/Error'
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
   <>
    <Navbar />
    <Routes>
      <Route exact path='/coffe-shop/' element = {<Home data = {Api}/>} />
      <Route exact path='/coffe-shop/about' element = {<About/>} />
      <Route exact path='/coffe-shop/gallery' element = {<Gallery/>} />
      <Route exact path='/coffe-shop/service' element = {<Service/>} />
      <Route exact path='/coffe-shop/testimonial' element = {<Testimonial/>} />
      <Route exact path='/coffe-shop/contact' element = {<Contact/>} />
      <Route exact path='*' element = {<Error/>} />
    </Routes>
    <Footer1 />
    <Footer2 />
   </>
  )
}

export default App
