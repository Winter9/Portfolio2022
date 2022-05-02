import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/Me2.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Luis Calderon</h1>
        <h5 className="text-light">Jr Web Developer</h5>
        <CTA/>
        <HeaderSocial/>
        <div className='me'>
          <img src={ME} alt="me" />
        </div>

        <div className='header__social-winter'>
          <a href="" className='inactiveLink'>WNTR</a>  
        </div>
        </div>     
    </header>
  )
}

export default Header