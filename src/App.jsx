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
      <Route exact path='/coffeshop/' element = {<Home data = {Api}/>} />
      <Route exact path='/coffeshop/about' element = {<About/>} />
      <Route exact path='/coffeshop/gallery' element = {<Gallery/>} />
      <Route exact path='/coffeshop/service' element = {<Service/>} />
      <Route exact path='/coffeshop/testimonial' element = {<Testimonial/>} />
      <Route exact path='/coffeshop/contact' element = {<Contact/>} />
      <Route exact path='/coffeshop/*' element = {<Error/>} />
    </Routes>
    <Footer1 />
    <Footer2 />
   </>
  )
}

export default App
