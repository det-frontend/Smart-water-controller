import React from 'react'
import styles from '../../styles/Sidebar.module.css'
import Link from 'next/link';
import { AiFillHome } from 'react-icons/ai';
import { HiUser } from 'react-icons/hi';
import { AiFillSetting } from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { RiTeamFill } from 'react-icons/ri';
import { RiLogoutBoxRFill } from 'react-icons/ri';
import { RiLogoutBoxFill } from 'react-icons/ri';
import { TbWritingSign } from 'react-icons/tb';


function SidebarMenu({setIsOpen}) {

    const oneDone = () => {
    document.querySelector('.Sidebar_sidebar__gyKt1').style.transform = "translateX(-100%)";
        document.querySelector('.Sidebar_wrapper__9LO2j').style.display = "none";
        document.querySelector('.Header_input__CtHVr').checked = false;
      setIsOpen(true);
      document.querySelector('body').style.overflow = "initial";
      
  }
  return (
      <>
      <div className={styles.sidebar}>
          <div className={styles.sidebar_container}>
                  <ul className={styles.sideMenu_ul}> 
            <Link className={styles.atag} href={'/'}>
              <li onClick={oneDone}><AiFillHome size={20} />Home</li>        
            </Link>
            <Link className={styles.atag} href={'/profile'}>
             <li onClick={oneDone}><HiUser size={20}/>Profile</li>
            </Link>
            <Link className={styles.atag} href={'/hotline'}>
             <li onClick={oneDone}><BsFillTelephoneFill size={20}/>Hot Line</li>
            </Link>
            <Link className={styles.atag} href={'/about'}>
             <li onClick={oneDone}><RiTeamFill size={20} />About Us</li>
            </Link>
              <Link className={styles.atag} href={'/login'}>
              <li onClick={oneDone}><RiLogoutBoxRFill size={20}/>Login</li>     
             </Link>
            <Link className={styles.atag} href={'/register'}>
            <li onClick={oneDone}><TbWritingSign size={20}/>Sign up</li>
            </Link>
              <li onClick={oneDone}><RiLogoutBoxFill size={20}/>Logout</li>
          </ul>   
          </div>
          </div>
          <div className={styles.wrapper}>
              
          </div>
      </>
  )
}

export default SidebarMenu