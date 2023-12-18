import styles from '../../styles/Register.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Router from 'next/router'
import instance from '../../components/axios/axios';


function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [isRegister, setIsRegister] = useState(false);
    

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = { name: name, email: email, phone: phone, password: password, passwordConfirmation: passwordConfirmation }

       try {
      const res = await axios.post(`${instance}/user/register`, data)
     setIsRegister(true);
    } catch (e) {
     
    }
        
    }

    useEffect(() => {
        if (isRegister) {
         Router.push('/login');
        }
    },[isRegister])

  return (
     <div className={styles.register}>
          <div className={styles.bubble}></div>
          
              <div className={styles.register_header}>
              
                  <Image width={90} className={styles.logo} height={100} src={`/logo.png`} alt="company_logo" placeholder={"blur"} blurDataURL={'/logo.png'}></Image>

              

                   <h1 className={styles.register_company_header}>Digital Engineering <span>Tech LTD</span></h1>

          </div>      
        
          <div className={styles.register_container}>
              <div className={styles.register_computer_header}>
                  
                   <Image width={150} className={styles.logo} placeholder={'blur'} blurDataURL={'/logo_window.png'} height={170} src={`/logo_window.png`} alt="company_logo"></Image>
                   <h1 className={styles.company_name}>Digital Engineering Tech LTD</h1>
       
              
         
          </div>    
              <form className={styles.register_form} onSubmit={(e)=>handleSubmit(e)}>
                  <h3 className={styles.kind_title}>Register</h3>
                  
                   <div className={styles.email_div}>
                      <div className={styles.email_title_container}>
                          <p className={styles.register_email_title}>Your FullName</p>
                  </div>
                      <input type='text' onChange={(e)=>setName(e.target.value)}  className={styles.register_email} placeholder='Your FullName'></input>
              </div>
              <div className={styles.email_div}>
                      <div className={styles.email_title_container}>
                          <p className={styles.register_email_title} >Your Email</p>
                  </div>
                      <input type='email' onChange={(e)=>setEmail(e.target.value)}   className={styles.register_email} placeholder='Your Email'></input>
                  </div>
                    <div className={styles.email_div}>
                      <div className={styles.email_title_container}>
                          <p className={styles.register_email_title}>Your Phone Number</p>
                  </div>
                      <input type='text' onChange={(e)=>setPhone(e.target.value)}  className={styles.register_email} placeholder='Your Phone'></input>
              </div>
              <div className={styles.password_div}>
                  <p className={styles.register_password_title}>Password</p>
                  <input type="password"  onChange={(e)=>setPassword(e.target.value)} className={styles.register_password} placeholder='Password'></input>
                  </div>
            <div className={styles.password_div}>
                  <p className={styles.register_password_title}>Password confirmation</p>
                  <input type="password" onChange={(e)=>setPasswordConfirmation(e.target.value)}  className={styles.register_password} placeholder='Password Confirmation'></input>
                </div>
                

              <div className={styles.button_div}>
                  <button type="submit" className={styles.register_button}>Sing Up</button>
                  </div>
                  
             


          </form>
         </div>
        
          <div className={styles.newUser}>
              <h3 className={styles.singup}>Already a User?
                  <Link href={'/login'}>
                    <span className={styles.signup_span}>Login</span>   
                  </Link>
                 </h3>
                  
          </div>
          <div className={styles.bubble2}></div>
          <div className={styles.bubble1}></div>
    </div>
  )
  
}

export default Register