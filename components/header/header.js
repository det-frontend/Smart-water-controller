import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react";
import styles from '../../styles/Header.module.css';
import SidebarMenu from "../sidebarMenu/sidebarmenu";


function Header() {
  const [isOpen, setIsOpen] = useState(true);
  const [userInfo, setUserInfo] = useState(false);


 
  const handleCallSidebar = () => {
    if (!isOpen) {
      document.querySelector('.Sidebar_sidebar__gyKt1').style.transform = "translateX(-100%)";
      document.querySelector('.Sidebar_wrapper__9LO2j').style.display = "none";
      document.querySelector('body').style.overflow = "initial";
      setIsOpen(true);
    }else if (isOpen) {
      document.querySelector('.Sidebar_sidebar__gyKt1').style.transform = "translateX(0%)";
      document.querySelector('.Sidebar_wrapper__9LO2j').style.display = "initial";
      document.querySelector('body').style.overflow = "hidden";


      setIsOpen(false);

    }
  }

  

  useEffect(() => {
    if (typeof window !== 'undefined') {
    const user = localStorage.getItem('key');

     if (user) {
      setUserInfo(true);
    }
    if (!user) {
      setUserInfo(false);
    }
    
    }
  },[])
  
    
   




  const handleLogout = (() => {
    localStorage.removeItem("key");
    location.reload();
   })
  
  return (
    <>
     <header className={styles.header}>
          <div className={styles.toggle}>
            <label className={styles.label} for="check">
      <input type="checkbox" onClick={handleCallSidebar} className={styles.input} id="check"/> 
      <span className={styles.barone}></span>
      <span className={styles.bartwo}></span>
      <span className={styles.barthree}></span>
    </label>  
          </div>
        <div className={styles.greeting}>
              <h3><Link href={'/'}><b>Digital Engineering Tech LTD.</b></Link></h3>
          </div>
          <div className={styles.menu_container}>
              <ul className={styles.menu_list}>
            <li >
              <Link href={'/'}>Home</Link>
                  </li>
               <li >
              <Link href={'/hotline'}>Hotline</Link>
                  </li>
            <li >
              <Link href={'/about'}>About</Link>
              </li>
            {
              userInfo?'': <li >
                      <Link href={'/login'}>Login</Link>
                 </li >
               }  
            {
              userInfo?'':  <li ><Link href={'/register'}>Signup</Link></li>
          }
            
            {
              userInfo? <li onClick={handleLogout}>Logout</li>:'`'
            }
              </ul>
          </div>
          <div className={styles.profilePicture}>
          <Link href={'/profile'}>
           <Image width={50} placeholder={"blur"} blurDataURL={'/logo_window.png'} className={styles.logo} height={70} src={`/logo_window.png`} alt="company_logo"></Image>  </Link> 
      </div>
      </header>
      <SidebarMenu setIsOpen={setIsOpen} />
    </>
  )
}

export default Header