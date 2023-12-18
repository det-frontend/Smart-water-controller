import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Router from 'next/router'
import { useEffect, useState } from 'react'
import { IoMdAdd } from 'react-icons/io'
import Device from '../components/device/device'
import NewDevice from '../components/newDevice'
import Link from 'next/link'
import DeviceInfo from '../components/deviceInfo/deviceInfo'
import { useMqttState } from 'mqtt-react-hooks';
import { Selector } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import LoadingDevice from '../components/loadingDevice/loadingDevice'
import axios from 'axios'
import instance from '../components/axios/axios'
import { userInfo } from 'os'
import Header from '../components/header/header'




export default function Home() {
  
  const [openNewDevice, setOpenNewDevice] = useState(false);
  const [fakeArray, setFakeArray] = useState([{ serialNumber: "990222090003", name: "Home", isActive: true }, { serialNumber: "1111", name: "Kitchen", isActive: false }]);
  const [dataArray, setDataArray] = useState([]);
  const [openDeviceInfo, setOpenDeviceInfo] = useState(false);
  const [loading, setLoading] = useState(false);
  const { connectionStatus } = useMqttState();
  const [userName, setUsername] = useState();
  
  const { name } = useSelector((state) => state.profile);


  const handleAddMoreDevice = () => {
    setOpenNewDevice(true);
      document.querySelector('body').style.overflow = "hidden";

  }

  const handleDeviceInfo = () => {
    setOpenDeviceInfo(true);
     

  }


  useEffect(() => {
    if (connectionStatus == 'Connected') {
      setLoading(true);
    }
  }, [connectionStatus])
  
  useEffect(() => { 
    const user = localStorage.getItem('key');
    const userInfo = JSON.parse(user);
   
    // if (!userInfo) {
    //   Router.push('/login');
    //   return;
    // }


     setUsername(userInfo.name);
   let config = {
    headers: {
      'Authorization': 'Bearer ' + userInfo.token
    }
  }
    const fetchSerial = async () => {
     
      try {
        
         await fetch(`http://3.0.102.145:9000/device/admin`, {
                method: "GET",
           headers: {
                 'Authorization': 'Bearer ' + userInfo.token,
                  "Content-Type": "application/json",
                  
  },
               
        }).then((response) => response.json())
  .then((data) => {
    setDataArray(data.result);
    console.log(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

       
      } catch (e) {
        console.log(e);
      }


    };

    if (user) {
      fetchSerial();
    }
  }, []);



  return (
    <>
      <Header/>
     <div className={styles.home}>
      <div className={styles.home_greeting}>
        <div className={styles.home_greeting_partone}>
          <div className={styles.home_greeting_des}>
            <h3 className={styles.home_greeting_title}>Welcome</h3>
            <p className={styles.home_greeting_name}>Good to see you, <span className={styles.home_username}>{userName}</span></p>
          </div>
          <div className={styles.home_greeting_time}>
            {/* <p>{(new Date()).toLocaleDateString('en-GB')}</p> */}
          </div>
        </div>
        <div className={styles.home_greeting_parttwo}>
          {/* <IoMdAdd onClick={handleAddMoreDevice} className={styles.home_add_device}  /> */}
        </div>
      </div>

      <div className={styles.home_devices_place}>
        <h3 className={styles.home_title}>Devices</h3>
        <div className={styles.home_devices_container}>
          {
            loading ? (
               
            dataArray.map((device) => (
                 <Device key={device._id}   id={device._id}  serialNumber={device.serialNo} name={device.name}  isActive={true} setOpenDeviceInfo={setOpenDeviceInfo}  />
            ))
         
            ) : (
                 dataArray.map((device) => (
                 <LoadingDevice key={Math.random() * 10000}  />
            ))
            )
         }
        </div>
       
       
          {
            openNewDevice?  <div className={styles.newDeviceWrapper}>  <NewDevice setOpenNewDevice={setOpenNewDevice} setFakeArray={setFakeArray} /></div> :""
        }

       {
          openDeviceInfo ? <div className={styles.newDeviceWrapper}> <DeviceInfo setOpenDeviceInfo={setOpenDeviceInfo} /></div>
       :""
       }      
        </div>
      <div className={styles.bubble}></div>
      </div>
      
    </>

  )
}

