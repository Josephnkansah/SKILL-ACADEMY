import React from 'react'
import './Title.css'
const Title = ({subtitle, title}) => {
  return (
    <div className='container'>
    <section className='title'>
        <p>{subtitle}</p>
        <h2>{title}</h2>
        <course/>
        </section>
    </div>
  )
}

export default Title