import React, { useEffect } from 'react'
import styles from '../../styles/LoadingDevice.module.css';
import Image from 'next/image';
import { AiFillClockCircle } from 'react-icons/ai';
import { AiFillBell } from 'react-icons/ai';
import { RiPencilFill } from 'react-icons/ri';
import { FaInfoCircle } from 'react-icons/fa';
import Link from 'next/link';



function LoadingDevice() {


  useEffect(() => {
    
  },[])

 const handleOpenDeviceInfo = () => {
   setOpenDeviceInfo(true);
    document.querySelector('body').style.overflow = "hidden";
 }
  
  
  
 
  
  
  return (
    <div className={styles.device}>
          

       <div className={styles.image_container_notActive}>
              <Image  alt='waterPump' className={styles.waterpump} width={70} height={70} src={`/loading.png`} />
          </div>

      <p className={styles.caption}>Loading</p>

          <div className={styles.card_menu_bar}>
              <ul className={styles.card_menu_list}>
              <li className={styles.device_session}><AiFillClockCircle/></li>
              <li className={styles.device_info} ><FaInfoCircle/></li>
                  
              </ul>  
      </div>
      <div class={styles.bigBubble_notActive}></div>
     <div class={styles.mediumBubble_notActive}></div>
     <div class={styles.smallBubble_notActive}></div>
    </div>
  )
}

export default LoadingDevice