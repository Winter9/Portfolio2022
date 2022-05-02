import React from 'react'
import './about.css'
import ME from '../../assets/Me.png'
import {HiOutlineAcademicCap} from 'react-icons/hi'
import {BsGraphUp} from 'react-icons/bs'
import {GiCrystalShine} from 'react-icons/gi'

const about = () => {
  return (
    <section className='about__section' id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About img" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <HiOutlineAcademicCap className='about__icon'/>
              <h5>Fast Learner</h5>
              <small>Always open to learn new things</small>
            </article>
            <article className='about__card'>
              <BsGraphUp className='about__icon'/>
              <h5>Motivated</h5>
              <small>Excited to grow professionally</small>
            </article>
            <article className='about__card'>
              <GiCrystalShine className='about__icon'/>
              <h5>Attention to detail</h5>
              <small>Every detail counts</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum magni fugit eum eligendi iusto deserunt,
            illum laudantium quam ad sunt suscipit, necessitatibus aspernatur, impedit maiores assumenda asperiores mollitia recusandae soluta.
          </p>

          <a href="#contact" className='btn btn-primary'>Contact me</a>

        </div>
      </div>
    </section>
  )
}

export default about