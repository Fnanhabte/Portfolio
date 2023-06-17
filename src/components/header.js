import React from 'react'
import { Link } from 'react-router-dom'


export default function Header() {
  return (
    <div className='Header-Container'>
      <div className='Header-wrapper'>
        <div className="top-info">
          <ul className="info">
            <li className='side-name'>
              <h3>
              Fnan habte UI / UX
              </h3>
            </li>
            <li>
              <div className="dash-wrapper">
              <span className="dash1"></span>
              <span className="dash2"></span>
              <span className="dash3"></span>
              </div>
            </li>
            <li>
              <div className="links-wrapper">
              <span className="link1">
                <Link to="https://www.linkedin.com/in/fnan-habte-b206b427a/" target='_blank' rel='noopener noreferrer'>LI</Link>
                </span>
              <span className="link2">
              <Link to="https://twitter.com/GoodxHope" target='_blank' rel='noopener noreferrer'>TW</Link>
              </span>
              <span className="link3">
              <Link to="https://github.com/Fnanhabte" target='_blank' rel='noopener noreferrer' >GH</Link>
              </span>
              <div className="light-mode"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      </div>
  )
}


