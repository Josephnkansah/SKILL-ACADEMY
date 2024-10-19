import React from 'react'
import './Learn.css'
import offer_1 from '../../images/alx1.jpg'
import offer_2 from '../../images/cour1.jpg'
import offer_3 from '../../images/c5.jpg'
import offer_4 from '../../images/c3.jpg'
import white_arrow from '../../images/white-arrow.png'
import { Link } from 'react-router-dom'

const  Learn = () => {
  return (
    <div className='learn'>
        <div className='C-offer'>
            <img src={offer_1} alt='' />
            <img src={offer_2} alt='' />
            <img src={offer_3} alt='' />
            <img src={offer_4} alt='' />

        </div>
        <Link to='/Course'>
        <button className='btn dark-btn'>SEE MORE HERE <img src={white_arrow} alt="" /></button>
        </Link>
      
    </div>
  )
}

export default  Learn
