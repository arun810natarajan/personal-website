import React from 'react';
import './about.css';
import celticsImage from '../../assets/Celtics.png';

const About = () => {
  return (
    <section id='about' className='about-section'>
      <div className='about-blurb'>
        Hi! I'm a sophomore Computer Engineering student @ Texas A&M University. I'm seeking roles in the financial technology, cloud engineering, and/or strategy consulting sectors. My primary interests are in cloud computing, AI/ML spaces, and product strategy.
      </div>
      <div className='celtics-logo'>
        <img src={celticsImage} alt='Celtics Logo' />
      </div>
    </section>
  );
}

export default About;
