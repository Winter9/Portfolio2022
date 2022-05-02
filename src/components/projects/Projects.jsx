import React from 'react'
import './projects.css'
import IMG1 from '../../assets/p1.png'
import IMG2 from '../../assets/p2.png'
import IMG3 from '../../assets/p3.png'
import IMG4 from '../../assets/p4.png'
import IMG5 from '../../assets/p5.png'
import IMG6 from '../../assets/p6.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'New Portfolio (React) | 2022',
    desc: 'I just started learning React, so i decided to practice a little by doing this portfolio with React',
    github:'https://github.com/Winter9/Portfolio2022'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Tasks (JS/NodeJS/MongoDB) | 2021',
    desc: 'This was a test in the university, its functionality its to register tasks',
    github:'https://github.com/Winter9/Ptask'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Roomi (JS/NodeJS/MongoDB) | 2021',
    desc: 'This was a big project from the university, feel free to dive into the code',
    github:'https://github.com/Winter9/PRoomi'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Anglo (Vanilla) | 2021',
    desc: 'This was an university task where we were asked to make the site anglo.ed.cr with only a PSD provided as reference',
    github:'https://github.com/Winter9/PAnglo'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Old Portfolio (Bootstrap) | 2018',
    desc: 'This was the first portfolio i made, back when i was just starting in the coding world',
    github:'https://github.com/Winter9/PortfolioOld'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Monkey Space (Bootstrap/Javascript) | 2018',
    desc: 'This was my first JS project in the university,along with 1 partner. Try it out in Login/iniciar with "User/123"',
    github:'https://github.com/Winter9/PMonkeyS'
  }
]

const Projects = () => {
  return (
    <section id='projects'>
      <h5>See how i code</h5>
      <h2>My Projects</h2>

      <div className="container projects__container">
        {
          data.map(({id, image, title, desc, github}) => {
            return(
              <article key={id} className='projects__item'>
                <div className='projects__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <small>{desc}</small>

                <div className='projects__item-cta'>
                  <a href={github} className='btn' target={'_blank'}>GitHub</a>
                </div>
              </article>
            )
          })
        }
      </div>


    </section>
  )
}

export default Projects