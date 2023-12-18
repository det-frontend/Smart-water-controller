import {useState,useRef, useEffect,useContext} from 'react'
import styles from '../../styles/Profile.module.css';
import Image from 'next/image';
import {HiUser } from 'react-icons/hi';
import {BsFillTelephoneFill} from 'react-icons/bs';
import { RiLockPasswordFill } from 'react-icons/ri';
import { AiFillEdit } from 'react-icons/ai';
import { AiOutlineUpload } from 'react-icons/ai';
import axios from 'axios';
import Header from '../../components/header/header';

axios.defaults.withCredentials = true;


function Profile() {
    const [email, setEmail] = useState('thuranyi64@gmail.com');
    const [gender, setGender] = useState('');
    const [password, setPassword] = useState('*******');
    const [phone, setPhone] = useState("09265577722");
    const [isActive, setIsActive] = useState(false);
    const [fakeData, setFakeData] = useState({
        Email: "thuranyi64@gmail.com",
        Password: "78782525",
        Phone: "78782525",
        gender:"Male"
    });
    const maleRef = useRef();
    const femaleRef = useRef();
    const otherRef = useRef();


    

    
    const handleEdit = (e) => {
        e.preventDefault();
        if (isActive) {

            const fakeData = {
                Email: email,
                Password: password,
                Phone: phone,
                gender: gender
            };

            setFakeData(fakeData);

            setIsActive(false);
        } else if (!isActive) {
            setIsActive(true);
       }

    }

    const handleCancel = (e) => {
        e.preventDefault();
        setIsActive(false);
        maleRef.current.classList.add('Profile_gender_kinds_active__D2QDE');

    }

    const handleMale = (e) => {
        maleRef.current.classList.add('Profile_gender_kinds_active__D2QDE');
        femaleRef.current.classList.remove('Profile_gender_kinds_active__D2QDE');
        otherRef.current.classList.remove('Profile_gender_kinds_active__D2QDE');
        setGender("Male");
    }
    const handleFemale = (e) => {
        femaleRef.current.classList.add('Profile_gender_kinds_active__D2QDE');
         maleRef.current.classList.remove('Profile_gender_kinds_active__D2QDE');
        otherRef.current.classList.remove('Profile_gender_kinds_active__D2QDE');
        setGender('Female');
        
    }
    const handleOther = (e) => {
        otherRef.current.classList.add('Profile_gender_kinds_active__D2QDE');
       femaleRef.current.classList.remove('Profile_gender_kinds_active__D2QDE');
        maleRef.current.classList.remove('Profile_gender_kinds_active__D2QDE');
        setGender('Other');
    }

  return (
      <>
          <Header />
           <div className={styles.Profile}>
          <div className={styles.colorSpan}></div>
          <div className={styles.user_div}>
              <Image width={100} className={styles.user_img} placeholder="blur" blurDataURL={'/User-Profile-PNG.png'} height={110} src={`/User-Profile-PNG.png`} alt="company_logo"></Image> 
              <div className={styles.username}>
                <h3>Thura Nyi</h3>
              </div>
          </div>
          <div className={styles.user_info}>
              <div className={styles.gender}>
                  <h3>Gender</h3>
                  <ul className={styles.gender_kinds}>
                      
                      {
                          isActive ? <>
                     <li ref={maleRef} className={styles.gender_kinds_active} onClick={handleMale}>Male</li>
                     <li ref={femaleRef} onClick={handleFemale}>Female</li>
                     <li ref={otherRef} onClick={handleOther}>Other</li>
                        </>
                              : <li className={styles.gender_active}>{fakeData.gender}</li>
                     }
                </ul>
              </div>
              <div className={styles.form_div}>
                  <h3>User Info</h3>
                  <form className={styles.user_form}>
                      <div className={styles.email}>
                          <HiUser/>
                          {
                              isActive ? <input onChange={(e)=>(setEmail(e.target.value))}  placeholder='email' value={email}></input> : <p>{email}</p>
                         }
                  </div>
                      <div className={styles.phone}>
                          <BsFillTelephoneFill/>
                   {
                              isActive ? <input  onChange={(e)=>(setPhone(e.target.value))} placeholder='phone' value={phone}></input> : <p>{phone}</p>
                         }
                  </div>
                      <div className={styles.password}>
                          <RiLockPasswordFill/>
                     {
                              isActive ? <input type={'password'} onChange={(e)=>(setPassword(e.target.value))}  placeholder='password' value={password}></input> : <p>{password}</p>
                         }
                      </div>
                    
                    
                      <div className={styles.button_container}>
                          <button className={styles.editButton} onClick={handleEdit}>{isActive ? "Done" : "Edit"} {isActive?<AiOutlineUpload />:<AiFillEdit/>}</button>
                          {
                              isActive?  <button className={styles.editButton} onClick={handleCancel}>Cancel</button> : ''
                         }
                  </div>
                  </form>
                  
              </div>
          </div>
    </div>
      </>
  )
}

export default Profile