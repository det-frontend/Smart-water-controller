import React from 'react'
import styles from '../../styles/Resetpassword.module.css'
import Image from 'next/image'
import Link from 'next/link'

function ResetPassword() {
  return (
     <div className={styles.register}>
          <div className={styles.bubble}></div>
          
              <div className={styles.register_header}>
        <Image width={90} className={styles.logo} placeholder="blur" blurDataURL={'/logo.png'} height={100} src={`/logo.png`} alt="company_logo"></Image>
              
            <h1 className={styles.register_company_header}>Digital Engineering <span>Tech LTD</span></h1>
          </div>      
        
          <div className={styles.register_container}>
              <div className={styles.register_computer_header}>
                  
          <Image width={150} placeholder="blur" blurDataURL={'/logo_window.png'} className={styles.logo} height={170} src={`/logo_window.png`} alt="company_logo"></Image>
          
          <h1 className={styles.register_company_header}>Digital Engineering Tech LTD</h1>
       
              
         
          </div>    
              <form className={styles.register_form}>
                  <h3 className={styles.kind_title}>Reset Password</h3>

                  <h3 className={styles.reset_password}>
                  Confirm your email and we&apos;ll send the instructions
                  </h3>  
                  
              <div className={styles.email_div}>
                      <div className={styles.email_title_container}>
                          <p className={styles.register_email_title}>Your Email</p>
                  </div>
                      <input type='email'   className={styles.register_email} placeholder='Your Email'></input>
              </div>
             
              <div className={styles.button_div}>
                  <button type="submit" className={styles.register_button}>Get Instructions</button>
                  </div>
                  
             


          </form>
         </div>
        
          <div className={styles.newUser}>
                  <Link href={'/login'}>
                    <span className={styles.signup_span}>Login</span>   
                  </Link>
                    <Link href={'/register'}>
                    <span className={styles.signup_span}>Register</span>   
                  </Link>
                  
          </div>
          <div className={styles.bubble2}></div>
          <div className={styles.bubble1}></div>
    </div>
  )
}

export default ResetPassword