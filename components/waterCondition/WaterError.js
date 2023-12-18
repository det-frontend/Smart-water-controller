import React from 'react'
import styles from '../../styles/WaterError.module.css';
import Error from '../../public/error.png';
import Image from 'next/image';

function WaterError() {
  return (
   <div className={styles.water_circle_container}>
      <div className={styles.water_circle_container_one_wave_one }>
              <Image  alt='Error' width={120} height={120} src={Error} />
      </div>         
   </div>
  )
}

export default WaterError