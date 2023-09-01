import React from 'react'
import { Link } from "react-router-dom"
import Home from '../components/Home'
import Project from "../pages/Projects"
import myImge from "../images/fnan.jpeg"
// import video from "../images/nature.mp4"

export default function About() {


  return (
    <div className='About-container'>
      <div className="routes">
        <div className="returns">
          <p><span className='left'></span>
          <Link to='/' element={<Home/>}>Home</Link>
           </p>
          <p> <Link to='/project' element={<Project/>}>Project</Link>  <span className='right'></span></p>
        </div>
      </div>
      <div className="conatiner-1">
        <div className="header-banner">
          <div className="text-info">
            <div className="detail">
              <span className="feild">My Story</span>
              <span className="time">3 min read</span>
            </div>
            <div className="main-topic">
              <h1><span className='topic'>From Curiosity to Code &mdash; </span>  My Path to Becoming a Software Engineer.</h1>
            </div>
            <div className="portfolio">
              <div className="image-wrap">
              <img src={myImge} alt="img" />
              </div>
              <span className='name'>Fnan Habte
                <br />
              <small className='date'>published in Jan 15 &nbsp; - San Francsico, CA

              &nbsp;&nbsp; <Link to="https://github.com/Fnanhabte" target='_blank' rel='noopener noreferrer' className='link'>Connect</Link>
              </small>

              </span>


            </div>
          </div>
        </div>
      </div>
      <div className="conatiner-2">
        <h3>I'm Fnan. A designer, maker and problem solver.</h3>
        <span className='line'></span>
        <p className='intro'>
        My journey began with a deep fascination for both aesthetics and technology, which eventually led me to pursue a career where I could combine my passions.
        </p>

        <p>
        As a designer, I strive to create visually captivating and user-centric experiences. I believe that design goes beyond just aesthetics—it should evoke emotions, solve problems, and enhance functionality. With a keen eye for detail and a strong sense of aesthetics, I work diligently to craft intuitive interfaces that leave a lasting impression.

        Driven by an innate desire to create something meaningful for society and humanity, I gravitated towards the world of software engineering. It became evident to me that this field held immense potential for transforming ideas into tangible solutions. With an unwavering commitment, I immersed myself in the vast realm of programming, design principles, and user experience, diligently acquiring the fundamental skills necessary for success.
        </p>

        <p>
        One of my favourite quotes by Ingvar Kamprad:
        </p>
        <h1 className='quotes'>
          "Simplicity and common sense should characterize planning and strategic direction."
        </h1>
        <p>
        This resonates so deeply with me because simplicity is often key in creating effective user experiences. Striving for simplicity means finding elegant solutions that are intuitive and easy to understand for the end-users. By eliminating unnecessary complexity and focusing on clarity, I can create designs that resonate with my audience and enhance usability.
        </p>
        <p>
        Similarly, in the realm of software engineering, common sense plays a crucial role in planning and strategic decision-making. It involves making logical choices, prioritizing functionality, and considering the practical implications of my code. Applying common sense principles helps me ensure that my software solutions are efficient, maintainable, and user-friendly.
        </p>
          <h4 className='skills'>
            Skills
          </h4>
          <p>
          HTML and CSS / Javascript / React.JS / Redux / Angular /  JQuery / Bootstrap / Wordpress / Vue.JS / Git /  User Research / Collaboration / Design Sprints / Design Systems / UI/UX Design / Figma / APIs / SEO
          </p>
          <h4 className="resume">
            <button className='cv'>
              <Link to="https://drive.google.com/file/d/1t84gIpXB5fGuPbR-ytMzSu-qO8yWKR1s/view?usp=drive_link" target='_blank'>Resume</Link>
            </button>
          </h4>
          <small className='footer-policy'>© 2023 Designed & Developed by Fnan. All right reserved.</small>
      </div>
    </div>
  )
}
