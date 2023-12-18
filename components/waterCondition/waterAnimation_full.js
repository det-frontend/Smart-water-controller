import React from 'react'
import styles from '../../styles/Water_animation_full.module.css';

function WaterAnimationFull() {
  return (
   <div className={styles.water_circle_container}>
              <div className={styles.water_circle_container_one_wave_one}>
                 <span className={styles.bubble_one}></span>
              <span className={styles.bubble_two}></span>
              <span className={styles.bubble_three}></span>
              <span className={styles.bubble_four}></span>
              <span className={styles.bubble_five}></span>
                <span className={styles.bubble_six}></span>
                <span className={styles.bubble_seven}></span>
               <span className={styles.bubble_eight}></span>
              </div>
            </div>
  )
}

export default WaterAnimationFull