import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <>
    <div className='hero'>
      <div className='hero-text'>
        <h1>Discover a World of Knowledge At Skill Academy</h1>
        <p>At Skill Academy, we provide a wide range of courses designed to help you enhance your skills at your own pace. Whether you're looking to advance your career or explore new passions, we have something for everyone.</p>
        <Link to='/Course'>
        <button className='btn'>The More To Know </button>
        </Link>
      </div>

    </div>
    </>
  )
}

export default Hero