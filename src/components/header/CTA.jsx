import React from 'react'
import Resume from '../../assets/resume.pdf'
import {BsLinkedin} from 'react-icons/bs'

const CTA = () => {
  return (
	<div className='cta'>
		<a href="https://www.linkedin.com/in/arun-natarajan-667674200/" target="_blank" rel="noreferrer" className='header_socials'><BsLinkedin/></a>
		<a href={Resume} download className='btn'>Download Resume</a>
		<a href="#contact" className='btn btn-primary'>Let's Connect</a>
	</div>
  )
}

export default CTA