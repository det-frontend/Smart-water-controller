import React, { useEffect } from 'react'
import styles from '../../styles/Device.module.css';
import Image from 'next/image';
import { AiFillClockCircle } from 'react-icons/ai';
import { AiFillBell } from 'react-icons/ai';
import { RiPencilFill } from 'react-icons/ri';
import { FaInfoCircle } from 'react-icons/fa';
import Link from 'next/link';



function Device({ serialNumber, name, isActive, setOpenDeviceInfo,id }) {


  useEffect(() => {
    
  },[])

 const handleOpenDeviceInfo = () => {
   setOpenDeviceInfo(true);
    document.querySelector('body').style.overflow = "hidden";
 }
  
  
  
 
  
  
  return (
    <div className={styles.device}>
          <div className={isActive?styles.active:styles.notActive}></div>
      <Link href={`/single_device/${serialNumber+'='+id}`}>
       <div className={isActive?styles.image_container_isActive:styles.image_container_notActive}>
              <Image  alt='waterPump' className={styles.waterpump} width={60} height={60} src={`/water_pump_1.png`} />
          </div>
      </Link>
      <p className={styles.caption}>{name}</p>

          <div className={styles.card_menu_bar}>
              <ul className={styles.card_menu_list}>
              <li className={styles.device_session}><AiFillClockCircle/></li>
              <li className={styles.device_info} onClick={handleOpenDeviceInfo}><FaInfoCircle/></li>
                  
              </ul>  
      </div>
      <div class={isActive?styles.bigBubble:styles.bigBubble_notActive}></div>
     <div class={isActive?styles.mediumBubble:styles.mediumBubble_notActive}></div>
     <div class={isActive?styles.smallBubble:styles.smallBubble_notActive}></div>
    </div>
  )
}

export default Device