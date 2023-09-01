import React from 'react'

export default function About() {
    const handlContactLink = () => {
    window.location.href = 'mailto:fnandev@gmail.com';
 }
  return (
    <div className='about-wrapper'>
      <div className="intro">
         <p>
          <span className='name'>
            Fnan Habte
          </span>
      Frontend Developer and UI/UX Designer from California. I develop next level web applications and translate ideas into engaging and memorable experiences.
       <span className="myemail" onClick={handlContactLink}> Lets connect!</span>
         </p>
      </div>
    </div>
  )
}
