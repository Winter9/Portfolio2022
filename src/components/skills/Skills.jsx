import React from 'react'
import './skills.css'
import {FaCheckCircle} from 'react-icons/fa'

const skills = () => {
  return (
    <section id='skills'>
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>


      <div className="container skills__container">
        <div className="skills__frontend">
          <h3>Frontend Development</h3>
          <div className="skills__content">
            <article className='skills__details'>
              <FaCheckCircle className='skills__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='skills__details'>
              <FaCheckCircle className='skills__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='skills__details'>
              <FaCheckCircle className='skills__details-icon'/>
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='skills__details'>
              <FaCheckCircle className='skills__details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='skills__details'>
              <FaCheckCircle className='skills__details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>

        </div>

      {/*-------------------------------- */}

        <div className="skills__backend">
        <h3>Backend Development</h3>
          <div className="skills__content">
            <article className='skills__details'>
              <FaCheckCircle className='skills__details-icon'/>
              <div>
                <h4>NodeJs</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='skills__details'>
              <FaCheckCircle className='skills__details-icon'/>
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            
          </div>

        </div>

      {/*-------------------------------- */}

      <div className="skills__other">
        <h3>Other</h3>
          <div className="skills__content">
            <article className='skills__details'>
              <FaCheckCircle className='skills__details-icon'/>
              <div>
                <h4>Photoshop</h4>
                <small className='text-light'>Advanced</small>
              </div>
            </article>
            <article className='skills__details'>
              <FaCheckCircle className='skills__details-icon'/>
              <div>
                <h4>AxureRP</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='skills__details'>
              <FaCheckCircle className='skills__details-icon'/>
              <div>
                <h4>Sony Vegas</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='skills__details'>
              <FaCheckCircle className='skills__details-icon'/>
              <div>
                <h4>Hardware Management</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>

        </div>

      </div>
    </section>
  )
}

export default skills