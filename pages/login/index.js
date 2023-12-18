import React, { useEffect, useState,useContext } from 'react'
import Image from 'next/image';
import styles from '../../styles/Login.module.css';
import Link from 'next/link';
import axios from 'axios';
import Router from 'next/router';
import instance from '../../components/axios/axios';
import {useDispatch } from 'react-redux';
import { SET_NAME } from '../../redux/reducers/profile';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   


    const dispatch = useDispatch();


 
    const handleSubmit = async(e) => {
        e.preventDefault();
        const dataa = { email: email, password: password };
       
    

        try {
           await fetch(`http://3.0.102.145:9000/user/login`, {
                method: "POST",
                headers: {
    "Content-Type": "application/json",
  },
                body: JSON.stringify(dataa),
        }).then((response) => response.json())
  .then((data) => {
      const userInfo = data.result;
       const userRealInfo = { name: userInfo.name, email: userInfo.email, image: userInfo.image, phone: userInfo.phone, token: userInfo.token }
      
      localStorage.setItem('key', JSON.stringify(userRealInfo));
 
     

       if (data.con) {
              Router.push('/'); 
          }
      
  })
  .catch((error) => {
    console.error("Error:", error);
  });
        
        
        } catch (e) {
            console.log(e);
     }
        
        
       

    }
    
  return (
      <div className={styles.login}>
          <div className={styles.bubble}></div>
          
              <div className={styles.login_header}>
        <Image width={90} className={styles.logo} height={100} src={`/logo.png`} placeholder="blur" blurDataURL={'/logo.png``'} alt="company_logo"></Image>
              
            
                  <h1 className={styles.register_company_header}>Digital Engineering <span>Tech LTD</span></h1>
       
          </div>      
        
          <div className={styles.login_container}>
              <div className={styles.login_computer_header}>
                  
                   <Image width={150} placeholder="blur" blurDataURL={'/logo_window.png'} className={styles.logo} height={170} src={`/logo_window.png`} alt="company_logo"></Image>
                   <h1 className={styles.company_name}>Digital Engineering Tech LTD</h1>
       
              
         
          </div>    
              <form className={styles.login_form} onSubmit={(e)=>handleSubmit(e)}>
                   <h3 className={styles.kind_title}>Login</h3>
              <div className={styles.email_div}>
                      <div className={styles.email_title_container}>
                          <p className={styles.login_email_title}>Your Email</p>
                  </div>
                      <input type='email' value={email} onChange={(e)=>(setEmail(e.target.value))} className={styles.login_email} placeholder='Your Email'></input>
              </div>
              <div className={styles.password_div}>
                  <p className={styles.login_password_title}>Password</p>
                  <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} className={styles.login_password} placeholder='Password'></input>
                  </div>
                  
                  <Link href={'/reset_password'}>
                   <p className={styles.forget_password}>Forget Password?</p>
                  
                  </Link>
                  <div className={styles.button_div}>
                      
                  <button type="submit" className={styles.login_button}>Log in</button>
                    
                  </div>
                  
             


          </form>
         </div>
        
          <div className={styles.newUser}>
              <h3 className={styles.singup}>Are you a new user?
                  <Link href={'/register'}>
                        <span className={styles.signup_span}>Sing up</span>
                  </Link>
                </h3>
          </div>
          <div className={styles.bubble2}></div>
          <div className={styles.bubble1}></div>
    </div>
  )
}

export default Login