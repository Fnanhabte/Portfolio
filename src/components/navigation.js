import React from 'react'
import About from './about'
import { Link} from 'react-router-dom';

export default function Navigation() {

   const handlContactLink = () => {
      window.location.href = 'mailto:fnandev@gmail.com';
   }
  return (
    <div className='navigation-wrapper'>

      <div className="bg-clr"></div>

      <nav>
         <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/project">Project</Link>
            </li>
           
            <li onClick={handlContactLink} >
               Contact
            </li>

          </ul>

      </nav>

      <About />
    </div>
  )
}
