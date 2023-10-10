import React from 'react';
import './experience.css';
import DellLogo from '../../assets/Dell-Logo.png';
import TACG from '../../assets/TACG.png';
const Experience = () => {
  return (
    <section id='experience'>
      <div className='experience-heading'>
        <h2>Experiences</h2>
      </div>
      <div className='timeline'>
        <div className='event'>
          <div className='event-logo'>
            <img src={DellLogo} alt='DellLogo'/>
          </div>
          <div className='event-company'>Dell Technologies</div>
          <div className='event-date'>May 2023 - Aug 2023</div>
          <div className='event-title'>Software Engineering Intern</div>
          <div className='event-description'>
          <ul>
            <li>Streamlined integration processes for offer teams on the SaaS platform, reducing time-to-market by 25% through a Go based worker service</li>
            <li>Standardized microservices within team, resulting in a 50% decrease in errors and improved overall defect maintenance</li>
            <li>Enhanced workflow efficiency by 30% through utilization of REST APIs, Docker, Kubernetes, and Temporal</li>
            <li>Automated build process for microservices by creating a new CI/CD pipeline using Jenkins, leading to a zero-defect release rate for offer teams</li>
          </ul>
          </div>
          </div>
          <div className='event'>
          <div className='event-logo2'>
            <img src={TACG} alt='TACGLOGO'/>
          </div>
          <div className='event-company'>Texas A&M Consulting Group</div>
          <div className='event-date'>Sep 2022 - Present</div>
          <div className='event-title'>Team Lead/Director of Finance</div>
          <div className='event-description'>
          <ul>
            <li>Mentored and coached junior analysts, fostering professional development and ensuring high-quality deliverables for clients</li>
            <li>Led team of 7 analysts working on marketing and revenue strategy with parking optimization startup Parkade; increased regional clientele by 125%</li>
            <li>Conducted financial analysis and provided recommendations to optimize resource allocation, resulting in a 15% increase in operational efficiency</li>
            <li>Collaborated with cross-functional teams to identify cost-saving opportunities and implemented initiatives yielding a 12% reduction in overall expenses</li>
          </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
