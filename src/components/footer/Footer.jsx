import React from 'react'
import './footer.css'
import {ImFacebook2} from 'react-icons/im'
import {ImGithub} from 'react-icons/im'
import {GrLinkedin} from 'react-icons/gr'

const Footer = () => {
  return (
    <footer>
      <a href="" className='footer__logo inactiveLink'>WNTR</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">My Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/Captwinter/" target="_blank"><ImFacebook2/></a>
        <a href="https://www.linkedin.com/in/luis-calderon-valerio-767ab2141/" target="_blank"><GrLinkedin/></a>
        <a href="https://github.com/Winter9" target="_blank"><ImGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy;Luis Calderon</small>
      </div>
    </footer>
  )
}

export default Footer