import React from 'react'

export default function About() {
    const handlContactLink = () => {
    window.location.href = 'mailto:fnandev@gmail.com';
 }
  return (
    <div className='about-wrapper'>
      <div className="intro">
         <p>
         Hello! I'm Fnan Habte, a full-stack developer and UI/UX designer from California. My expertise is developing next-level web applications and translating ideas into engaging and memorable experiences, including full frontend design.<span className="myemail" onClick={handlContactLink}> Lets connect!</span>
         </p>
      </div>
    </div>
  )
}
