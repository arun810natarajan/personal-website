import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/Me1.png'


const Header = () => {
  return (
	<header>
		<div className="container header_container">

			<h1>Arun Natarajan</h1>
			<h5 className="text-light">Computer Engineering @ Texas A&M '2026</h5>
			<CTA /> 

			<div className="me-container">
					<div className="layer"></div>
					<img src={ME} alt="" />
			</div>

			<a href="#contact" className='scroll_down'>Scroll Down</a>
		</div>
	</header>
	
  )
}

export default Header