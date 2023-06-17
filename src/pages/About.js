import React from 'react'
import { Link } from "react-router-dom"
import Home from '../components/Home'
import Project from "../pages/Projects"
import myImge from "../images/man.jpg"



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
              <span className="time">7 min read</span>
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
        Life is a journey in software engineering and UI/UX design has been nothing short of extraordinary, defined by a relentless pursuit of growth, unwavering determination, and a profound sense of purpose. As a young individual from Eritrea, I embarked on a transformative adventure when I arrived in America at the tender age of 11. This marked the beginning of a path filled with both obstacles and prospects that I eagerly embraced with open arms.
        </p>

        <p>
        The challenges I encountered along the way served as catalysts for my personal and professional development. Adjusting to a new culture, language, and educational system demanded resilience and adaptability, qualities that would later become invaluable in my journey as a software engineer and UI/UX designer. I viewed each hurdle as an opportunity for growth, propelling me forward in my pursuit of knowledge and expertise.

        Driven by an innate desire to create something meaningful for society and humanity, I gravitated towards the world of software engineering. It became evident to me that this field held immense potential for transforming ideas into tangible solutions. With an unwavering commitment, I immersed myself in the vast realm of programming, design principles, and user experience, diligently acquiring the fundamental skills necessary for success.
        </p>

      </div>
    </div>
  )
}
