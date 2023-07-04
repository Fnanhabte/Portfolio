import React from 'react'
import Adidas from '../images/Adidas.png'
import pro from '../images/pro.png'
import work from '../images/work.png'
import { Link } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/about'


export default function Projects() {
  const handlContactLink = () => {
    window.location.href = 'mailto:fnandev@gmail.com';
 }

  return (
    <div className='project-container'>
      <div className="rout-links">
          <ul>
            <li>
              <Link to="/" element={<Home/>}>Home</Link>
            </li>
            <li>
            <Link to="/about" element={<About/>}>About</Link>
            </li>

          </ul>
        </div>
      <div className="quote-animation">
        <h4>Love what you do success will follow &mdash;
          Passion fuels great work &mdash;

          Courage to continue breeds success &mdash;

          Willpower separates winners from others &mdash;

          Ignite your success with determination &mdash;

          Success is not the absence of failure it's the persistence through failure &mdash;

          The only limit to our realization of tomorrow will be our doubts of today &mdash;

          The harder I work, the luckier I get

          Success is not about the destination it's about the journey &mdash;

        </h4>
      </div>
      <div className="header-wrapper">
        <div className="information">
          <p className='first-info'>
            This is a showcase of my best work in a variety of fields, from Graphic and Web Design to building efficient, maintainable, and user-friendly.
          </p>

          <p>
            The world of Digital Design has grown at an extremely rapid rate over the last 5 years and my aim has been to evolve with it. I’m learning and gaining new skills every day.
          </p>
        </div>
      </div>
      <div className="project-wrapper">

        <div className="col work1">
          <div className="project">
            <Link to='https://fnanhabte.github.io/adidas/' target='_blank'>
            <img src={Adidas} alt="project-1" />
            </Link>

          </div>
          <div className="work-info">
            <span className="number">1 .</span>

            <Link to='https://fnanhabte.github.io/adidas/' target='_blank'>
            <p>adidas official site</p>
            </Link>
            <p className='text'>Transformed Adidas' online presence by developing a cutting-edge, user-centric website that flawlessly blends style and functionality. The site captivates visitors by seamlessly integrating modern design elements and dynamic features while reflecting the iconic Adidas brand.</p>

          </div>
        </div>

        <div className="col work2">
          <div className="project">
          <Link to='https://fnanhabte.github.io/adidas/' target='_blank'>
            <img src={pro} alt="project-1" />
            </Link>
          </div>
          <div className="work-info">
            <span className="number">2 .</span>
             <p>Furniture Agency</p>
          </div>
        </div>

        <div className="col work3">
          <div className="project">
          <Link to='https://fnanhabte.github.io/adidas/' target='_blank'>
            <img src={work} alt="project-1" />
            </Link>
          </div>
          <div className="work-info">
            <span className="number">3 .</span>
             <p>Furniture Agency</p>
          </div>
        </div>

      </div>
      <div className="project-footer">
          <div className="links">
              <p>
              I have been involved in various projects that have allowed me to showcase my skills and expertise. These projects have been diverse in nature, encompassing different areas of interest. Each project has provided valuable learning experiences and opportunities for growth.
              </p>
          </div>
          <div className="connection">
            <p onClick={handlContactLink}>
              connect with me <span className='hide-text'>
                &mdash; connect with me &mdash; connect with me &mdash; connect with me &mdash; connect with me
                &mdash; connect with me 
              </span>
            </p>
          </div>
      </div>
      <div className="social-footer">
          <div className="social">
            <ul>
              <li>
              <Link to="https://www.linkedin.com/in/fnan-habte-b206b427a/" target='_blank' rel='noopener noreferrer'>LI</Link>
              </li>
              <li>
              <Link to="https://twitter.com/GoodxHope" target='_blank' rel='noopener noreferrer'>TW</Link>
              </li>
              <li>
              <Link to="https://github.com/Fnanhabte" target='_blank' rel='noopener noreferrer' >GH</Link>
              </li>
            </ul>
          </div>
      </div>
    </div>
  )
}