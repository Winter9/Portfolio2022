import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'



const HeaderSocial = () => {
  return (
    <div className='header__social'>
        <a href="https://www.linkedin.com/in/luis-calderon-valerio-767ab2141/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Winter9" target="_blank"><BsGithub/></a>
        <a href="https://www.facebook.com/Captwinter" target="_blank"><BsFacebook/></a>

    </div>
  )
}

export default HeaderSocial