import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Blog from './components/Blog/Blog'
import About from './components/About/About'
import Learn from './components/Learn/Learn'
import Testimonials from './components/Testimonials/Testimonials'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>

      <Navbar/>
  
      <Hero/>
      <Blog/>
     
     <About/>
   
     <Learn/>
   
     <Testimonials/>
   <Footer/>

     </>
  )
}

export default App 