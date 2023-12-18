import Image from 'next/image'
import React from 'react'
import styles from '../../styles/Hotline.module.css'
import Header from '../../components/header/header'

function Hotline() {
  return (
      <>
          <Header />
           <div className={styles.hotline}>
          <Image width={350} placeholder={"blur"} blurDataURL={'/aq.png'}   className={styles.logo} height={350} src={`/aq.png`} alt="company_logo"></Image> 
          <h3 className={styles.title}> 09 988 340001</h3>
    </div>
      </>
  )
}

export default Hotline