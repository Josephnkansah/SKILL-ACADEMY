import React, { useState } from 'react'
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
const Login = () => {
    const [inLogin, setInLogin] = useState(true);
  return (
    <div className='container-l'>
        <div className='container-form'>
            <div className='form-start'>
                <button className={inLogin ? 'active' : ""} onClick={() => setInLogin (true)}>Login</button>
                <button className={!inLogin ? 'active' : ""} onClick={() => setInLogin (false)}>Register</button>

            </div>
            {inLogin ? <>
            <div className='form-1'>
                <h1>LOGIN FROM</h1>
                <input type="email" placeholder='Email /username' />
                <input type="password" placeholder='Password' />
                <a href='#'>Forgot Password?</a>
                
                <button>Login</button>

                <p>Don't have Account? <a href='#' onClick={() => setInLogin(false)}>Register Now</a></p>

                <div className="social">
         <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
         </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
      </a>
       <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
       <a href="mailto:support@skillacademy.com">
        <FontAwesomeIcon icon={faEnvelope} />
         </a>
     </div>

            </div>
            </> : <>
            <div className='form-1'>
            <h2>REGISTER</h2>
            <input type="name" name='name' placeholder='Full name' />
            <input type="email" placeholder='Email' />
            <input type="password"  placeholder='Password' />
            <input type="password" placeholder='Confirm Password' />
            <button>SignUp</button>
            </div>
            </>}
        </div>
    </div>
  )
}

export default Login