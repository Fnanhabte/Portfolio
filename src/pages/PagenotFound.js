import React from 'react'
import Home from '../components/Home'
import { Link } from 'react-router-dom'

export default function PagenotFound() {
  return (
    <div>
      <div className="pagenotfound" id='pagenotfound'>
        <div className="page-wrapper">
          <h1>
            ERR.
          </h1>
          <p className='first-text'>Page not found</p>
          <p>The page you are looking for does not exist.</p>
          <p>
            <Link to="/" element={<Home/>}>Home</Link>
          </p>
        </div>
        <div className="footer">
         <p> © 2023 Designed & Developed by Fnan. All right reserved.
        </p>
      </div>
      </div>
    </div>
  )
}
