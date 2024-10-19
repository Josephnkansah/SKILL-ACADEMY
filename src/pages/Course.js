import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import './page.css'
import Title from '../components/Title/Title'
import Footer from '../components/Footer/Footer'
import Link from '../components/Link/Link'
const Course = () => {
  return (
    <>
      <Navbar/>
      <div className='course'>
      <div className='course-container'>
      <div className='course-text'>
      <h1>Explore Our Diverse Range of Courses</h1>
      <h2>Your Gateway to Knowledge and Skills</h2>
        <p></p>
      </div>
    </div>
    </div>
    <Title subtitle='Browse Our Wide Range' title='Courses at Skill Academy'/>
    <Link/>
    <Footer/>
    </>
  )
}

export default Course