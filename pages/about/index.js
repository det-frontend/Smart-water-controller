import React from 'react'
import styles from '../../styles/About.module.css';
import Header from '../../components/header/header';

function About() {
  return (
    <>
      <Header/>
     <div className={styles.about}>
      <h3 className={styles.title}>About Our Company Journey History</h3>  
      
      <div className={styles.partone}>
        <p>Our company, initially named Digital Engineering Group, was established in December 2019 and later changed and registered to Digital Engineering Tech Ltd in November 2021.
        </p>
        <p><b>We offer a variety of services with a primary focus on IOT Engineering and other IT services.
</b></p>
      </div>
    
      <ul className={styles.listItem}>
        <h3>Throughout our journey, our company has achieved several significant milestones which are
        </h3>
        <li>In January 2020, we released the <b>Laser Light Security Alert system</b> with cloud-based alert.</li>
        <li>Additionally, during the COVID-19 pandemic, we developed and released the <b>Automatic Hand Wash</b> system, which was donated to necessary areas.</li>
        <li>In January 2022, we released the <b>Smart Water Controller Project</b> for home/apartment and hotel use. This project is designed to provide efficient water management solutions to reduce water wastage and help conserve the environment.</li>
        <li>In August 2022, we released the <b>Smart Room Controller Project</b> for home/apartment and hotel use. This project offers an intelligent control system that allows users to manag</li>
        <h3>These moments have been crucial to our growth and success, and we look forward to continuing to provide innovative solutions to our customers.
</h3>
      </ul>

    </div>
    </>
  )
}

export default About