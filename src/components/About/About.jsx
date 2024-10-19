import React from 'react'
import './About.css'
import About_1 from '../../images/pexels-rdne-7713208.jpg'
import About_2 from '../../images/pexels-yankrukov-8199166.jpg'
import About_3 from '../../images/a.png'
import About_a from '../../images/fe1.png'
import About_b from '../../images/fe2.png'
import About_c from '../../images/SKILL ACADEMY.png'
import Title from '../Title/Title'

const About = () => {
  return (
    <>
     <Title subtitle='Empowering Your Creative Vision' title='Master the Art of Photography' />
    <div className='abouts'>
        <div className='about'>
            <img src={About_1} alt='' />
            <div className='icon'>
            <img src={About_a} alt=''/>
            <p>Our Mission</p>
            </div>

        </div>
        <div className='about'>
            <img src={About_2} alt='' />
            <div className='icon'>
            <img src={About_b} alt=''/>
            <p>Why Choose Us?</p>
            </div>
        </div>
        <div className='about'>
            <img src={About_3} alt='' />
            <div className='icon'>
            <img src={About_c} alt=''/>
            <p>Join Our Community</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default About