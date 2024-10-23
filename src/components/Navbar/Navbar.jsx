import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';
import menu from '../../images/menu.png'
const Navbar = () => {
  const [home, setHome] = useState(false);

  useEffect( ()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 900 ? setHome(true) : setHome(false);
    })
  },[]);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = ()=>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className={`container ${home? 'four-nav' : ''}`}>
      <Link to='/'>
        <img src={logo} alt="" className='logo'/>
        </Link>
        <ul className={mobileMenu? '':'hide-mobile-menu'}>
          <li>
          <Link to='/'> Home</Link>
            </li>
          <li>
          <Link to='/Course'>
            Courses
            </Link>
            </li>
          <Link to='/Sign'>
            Login
            </Link>
            </li>
          <li>
          <Link to='/Contact'>
            <button className='btn' >Contact</button>
            </Link>
            </li>
        </ul>
        <img src={menu} alt="" className='menu' onClick={toggleMenu} />
    </nav>
  )
}
export default Navbar
