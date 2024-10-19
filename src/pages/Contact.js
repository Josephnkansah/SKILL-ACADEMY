import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Title from '../components/Title/Title'
import './page.css'
import Footer from '../components/Footer/Footer'
import HContact from '../components/Contact us/HContact'
const Contact = () => {
  return (
    <>
      <Navbar/>
      <div className='Done'>
      <div className='Done-T'>
      <h1>Get in Touch with Skill Academy</h1>
      <h2>Our Mission: The More To Know</h2>
        <p></p>
      </div>
    </div>
    <Title subtitle='We’re Here to Help' title='Get in Touch with Skill Academy' />
    <HContact/>
    <Footer/>
 </>
  )
}

export default Contact