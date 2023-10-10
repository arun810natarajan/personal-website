import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUserSwitch} from 'react-icons/ai'
import {LuGraduationCap} from 'react-icons/lu'
import {AiOutlinePhone} from 'react-icons/ai'
import {useState} from 'react'


const Nav = () => {
  const[activeNav, setActiveNav] = useState('#')
  return (
	<nav>
    <a href="#" onClick={() => setActiveNav('#')} className={activeNav ==='#' ? 'active' : ''}><AiOutlineHome/></a>
    <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav ==='#about' ? 'active' : ''} ><AiOutlineUserSwitch/></a>
    <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav ==='#experience' ? 'active' : ''}><LuGraduationCap/></a>
    <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav ==='#contact' ? 'active' : ''}><AiOutlinePhone/></a>

  </nav>
  )
}

export default Nav