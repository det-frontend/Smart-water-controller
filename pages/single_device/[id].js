import React, { useEffect,useState } from 'react'
import styles from '../../styles/SingleDevice.module.css'
import Router from 'next/router'
import WaterLowLevel from '../../components/waterCondition/waterLowLevel';
import WaterMediumLevel from '../../components/waterCondition/waterMediumLevel';
import WaterFullLevel from '../../components/waterCondition/waterFullLevel';
import WaterAnimation from '../../components/waterCondition/waterAnimation';
import { io } from 'socket.io-client';
import WaterAnimationMedium from '../../components/waterCondition/waterAnimation_medium';
import WaterAnimationFull from '../../components/waterCondition/waterAnimation_full';
import { type } from 'os';
import LoadingButton from '../../components/loadingButton/LoadingButton';
import LoadingButtonEngine from '../../components/loadingButtonEngine/loadingButtonEngine';
import WaterError from '../../components/waterCondition/WaterError';
import { useMqttState,useSubscription } from 'mqtt-react-hooks';
import axios from 'axios';
import instance from '../../components/axios/axios';
import Header from '../../components/header/header';



function SingleDevice({serial}) {
 //device control condition to send data to websocket 
  
  const [manual, SetisManual] = useState('');
  const [auto, SetisAuto] = useState('');
  const [groudMotorCondition, setGroudMotorCondition] = useState('');
  const [headMotorCondition, setHeadMotorCondition] = useState('');

   
  


   

  const [waterConditionGround, setWaterConditionGround] = useState('');
  const [waterConditionHead, setWaterConditionHead] = useState('');
  const [autoModeCondition, setAutoModeCondition] = useState(false);
  
  const [deviceName, setDeviceName] = useState('');
  const [onOffGroud, setOnOffGroud] = useState(false);
  const [onOffHead, setOnOffHead] = useState(false);
  const [groundWaterLvl, setGroundWaterLvl] = useState('');
  const [headWaterLvl, setHeadWaterLvl] = useState('');
  const [waterError, setWaterError] = useState('');

  const [initialDataState, setInitialDataState] = useState([]);
  const [isInitial, setIsInitial] = useState(false);


  const [isGroundButtonInitial, setIsGroundButtonInitial] = useState(false);
  const [isHeadButtonInitial, setIsHeadButtonInitial] = useState(false);
  const [isAutoInitial, setIsAutoInitial] = useState(false);
  const [responseSerial, setResponseSerial] = useState();
   


  const [serialNumber, setSerialNumber] = useState(serial[0]);
  const [deviceMode, setDeviceMode] = useState('');
  const [deviceOne, setDeviceOne] = useState('');
  const [deviceTwo, setDeviceTwo] = useState('');
  const [deviceOneLvl, setDeviceOneLvl] = useState('');
  const [deviceTwoLvl, setDeviceTwoLvl] = useState('');
  const [deviceState, setDeviceState] = useState('');
  const [deviceData, setDeviceData] = useState('');
  const [userInfo, setUserInfo] = useState([]);
  const { client } = useMqttState();
  const [cluster1Ground, setCluster1Ground] = useState();
  const [cluster1Head, setCluster1Head] = useState();

     
 const { message } = useSubscription([
     `spdm/${serial[0]}/device/mode`,
     `spdm/${serial[0]}/device/one`,
     `spdm/${serial[0]}/device/two`,
     `spdm/${serial[0]}/device/state`,
     `spdm/${serial[0]}/device/data`,
     `spdm/${serial[0]}/device/one/lvl`,
     `spdm/${serial[0]}/device/two/lvl`,
 ]);
  
  
  
  
 useEffect(() => {
        if (message?.topic == `spdm/${serial[0]}/device/mode`) {
          setDeviceMode(message?.message)
        } else if (message?.topic == `spdm/${serial[0]}/device/one`) {
          setDeviceOne(message?.message)
        } else if (message?.topic == `spdm/${serial[0]}/device/two`) {
          setDeviceTwo(message?.message)
        } else if (message?.topic == `spdm/${serial[0]}/device/state`) {
          setDeviceState(message?.message)
        } else if (message?.topic == `spdm/${serial[0]}/device/data`) {
          setDeviceData(message?.message)
        } else if (message?.topic == `spdm/${serial[0]}/device/one/lvl`) {
          setDeviceOneLvl(message?.message)
        } else if (message?.topic == `spdm/${serial[0]}/device/two/lvl`) {
          setDeviceTwoLvl(message?.message)
        }
   
  },[message,serial])




    
  useEffect(() => {
    
    if (deviceMode === 'auto') {
      setAutoModeCondition(true);
      setIsAutoInitial(false);
      console.log("this is auto");
    
    }
  
    if (deviceMode === 'manual') {
      setAutoModeCondition(false);
      setIsAutoInitial(false);
      console.log('this is manual');

   }


  }, [deviceMode]) 
  

  useEffect(() => {
  
    const dataArray = deviceData.split('');


    if (dataArray[0] === 'A') {
       setAutoModeCondition(true)
    }
    if (dataArray[0] === 'M') {
      setAutoModeCondition(false);
    }
    if (dataArray[1] === 'E') {
      setWaterConditionGround('1')
    }
    if (dataArray[1] === 'C') {
      console.log("This is 50")
      setWaterConditionGround('50')
    }
    if (dataArray[1] === 'F') {
      setWaterConditionGround('100')
    }
    if (dataArray[1] === 'R') {
      setWaterConditionGround('Error')
    }
    if (dataArray[2] == 'E') {
      setWaterConditionHead('1');
    }
    if (dataArray[2] == 'C') {
      setWaterConditionHead('50');
      
    }
    if (dataArray[2] == 'F') {
      setWaterConditionHead('100');
      
    }
    if (dataArray[2] == 'R'){
      setWaterConditionHead('Error');
      
    }
    if (dataArray[3] == 'P') {
      setOnOffGroud(true);
    }
    if (dataArray[3] == 'S') {
      setOnOffGroud(false);
    }
    if (dataArray[4] == 'P') {
       setIsInitial(true);
      setOnOffHead(true);
    }
    if (dataArray[4] == 'S') {
       setIsInitial(true);
      setOnOffHead(false)
    }
  
   

  }, [deviceData])
  
  useEffect(() => {
    if (deviceOne == 'start') {
      setOnOffGroud(true);
    }
    if (deviceOne == 'stop') {
      setOnOffGroud(false);
    }

  }, [deviceOne])
  
  useEffect(() => {
    if (deviceTwo == 'start') {
      setOnOffHead(true);
    }
    if (deviceTwo == 'stop') {
      setOnOffHead(false);
    }
  }, [deviceTwo])
  
  useEffect(() => {
   setWaterConditionGround(deviceOneLvl)
  },[deviceOneLvl])

  useEffect(() => {
    setWaterConditionHead(deviceTwoLvl);
  },[deviceTwoLvl])

  useEffect(() => {
   
    const user = localStorage.getItem('key');
    const userInfo = JSON.parse(user);
    setUserInfo(userInfo);

    let config = {
    headers: {
      'Authorization': 'Bearer ' + userInfo.token
    }
    }

    client?.publish(`spdm/${serial[0]}/mobile/state`, 'getdevicedata');
    
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
    const datae = data.result;
     const raw = datae.filter((e) => (e._id == serial[1]));


    setCluster1Ground(raw[0].clusters[0]._id);
    setCluster1Head(raw[0].clusters[1]._id);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

       
      } catch (e) {
        console.log(e);
      }
    };

    fetchSerial();


    console.log('hello');

  }, [client,serial])
  

  const handleAutoButton = async () => {


    let config = {
    headers: {
      'Authorization': 'Bearer ' + userInfo.token
    }
    }

    
    
    if (autoModeCondition) {
      let mode = {
      mode: 'manual'
    }
      try {
      await fetch(`http://3.0.102.145:9000/device?_id=${serial[1]}`, {
                method: "PATCH",
           headers: {
                 'Authorization': 'Bearer ' + userInfo.token,
                  "Content-Type": "application/json",
                  
        },
         body: JSON.stringify(mode),
               
        }).then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
      

    } catch (e) {
      
     }
    }

    if (!autoModeCondition) {
      let mode = {
      mode: 'auto'
    }
           try {
      await fetch(`http://3.0.102.145:9000/device?_id=${serial[1]}`, {
                method: "PATCH",
           headers: {
                 'Authorization': 'Bearer ' + userInfo.token,
                  "Content-Type": "application/json",
                  
        },
         body: JSON.stringify(mode),
               
        }).then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
      

    } catch (e) {
      
     }
    }
    
  };

  
  const handleActiveGroundMotor = async () => {

    console.log(cluster1Ground);

    if (onOffGroud) {
      console.log('hello');
      let mode = {
      condition: 'stopmotor'
    }
      try {
           await fetch(`http://3.0.102.145:9000/cluster?_id=${cluster1Ground}`, {
                method: "PATCH",
           headers: {
                 'Authorization': 'Bearer ' + userInfo.token,
                  "Content-Type": "application/json",
                  
        },
         body: JSON.stringify(mode),
               
        }).then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
      
    } catch (e) {
        console.log(e);
     }
    }

    if (!onOffGroud) {
       console.log('hello');
      let mode = {
      condition: 'startmotor'
    }
      try {
       await fetch(`http://3.0.102.145:9000/cluster?_id=${cluster1Ground}`, {
                method: "PATCH",
           headers: {
                 'Authorization': 'Bearer ' + userInfo.token,
                  "Content-Type": "application/json",
                  
        },
         body: JSON.stringify(mode),
               
        }).then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
    } catch (e) {
        console.log(e);
     }
    }


  }

  const handleActiveHeadMotor = async() => {
    

    if (onOffHead) {
      let mode = {
      condition: 'stopmotor'
    }
      try {
      await fetch(`http://3.0.102.145:9000/cluster?_id=${cluster1Head}`, {
                method: "PATCH",
           headers: {
                 'Authorization': 'Bearer ' + userInfo.token,
                  "Content-Type": "application/json",
                  
        },
         body: JSON.stringify(mode),
               
        }).then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
    } catch (e) {
        console.log(e);
     }
    }

    if (!onOffHead) {
      
      let mode = {
      condition: 'startmotor'
    }
      try {
       await fetch(`http://3.0.102.145:9000/cluster?_id=${cluster1Head}`, {
                method: "PATCH",
           headers: {
                 'Authorization': 'Bearer ' + userInfo.token,
                  "Content-Type": "application/json",
                  
        },
         body: JSON.stringify(mode),
               
        }).then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
    } catch (e) {
        console.log(e);
     }
    }

  }



  return (
    <>
    <Header/>
     <div className={styles.singleDevice}>
      <div className={styles.serialNumber}>
        <h3>Serial Number : <span>{serial[0]}</span></h3>
      </div>
      <div className={styles.button_container}>
        {
         isInitial? (  autoModeCondition?<h2>Auto Mode</h2>:<h2>Manual Mode</h2>):<h2>Loading</h2>
        }
        {/* <label className={styles.switch}>
             <input onClick={handleAutoButton}  id="lightButton" type="checkbox"/>
               <span className={styles.slider +" "+ styles.round}></span>
        </label> */}
        {
      (  isInitial? isAutoInitial?<LoadingButton/>: (
         <button className={styles.auto_button} onClick={handleAutoButton}>{autoModeCondition?"Manual":"Auto"}</button>
          ) :  <button className={styles.auto_button} >Loading</button>)
      }
      </div>
      <div className={styles.water_container}>
        <div className={styles.water_container_one}>
          <div className={styles.water_circle_container_one}>
             <div>
              <h3 className={styles.motor_name}>Ground Motor</h3>
            </div>
           
             {
              onOffGroud ?  (() => {
                switch ( waterConditionGround) {
                  case "100": return <WaterFullLevel />;
                  case "50": return <WaterMediumLevel />;
                  case "1": return <WaterLowLevel />;
                  case "Error" : return <WaterError/>
                }
            })():(() => {
                switch ( waterConditionGround) {
                  case "100": return <WaterAnimationFull />;
                  case "50": return <WaterAnimationMedium />;
                  case "1": return <WaterAnimation />;
                  case "Error" : return <WaterError/>

                }
            })()
           }
               
           
            <div className={styles.water_active_button_container}>
              {
               isInitial?isGroundButtonInitial? <LoadingButtonEngine/>:( autoModeCondition? <button disabled="true" className={styles.water_active_button}>Auto Mode</button>:  <button className={styles.water_active_button}  onClick={handleActiveGroundMotor}>{onOffGroud?"Stop":"Start"}</button>) :<button disabled="true" className={styles.water_active_button}>Loading</button>
            }
          </div>

          </div>
        </div>
         <div className={styles.water_container_one}>
          <div className={styles.water_circle_container_one}>
             <div>
              <h3 className={styles.motor_name}>Overhead Motor</h3>
            </div>
           
         
            {
              onOffHead ?   (() => {
                switch ( waterConditionHead) {
                  case "100": return <WaterFullLevel />;
                  case "50": return <WaterMediumLevel />;
                  case "1": return <WaterLowLevel />;
                  case "Error" : return <WaterError/>


                }
            })():(() => {
                switch ( waterConditionHead) {
                  case "100": return <WaterAnimationFull />;
                  case "50": return <WaterAnimationMedium />;
                  case "1": return <WaterAnimation />;
                  case "Error" : return <WaterError/>


                }
            })()
           }
               
           
            <div className={styles.water_active_button_container}>
              {
                isInitial ? isHeadButtonInitial?<LoadingButtonEngine/>:(
                autoModeCondition?<button  className={styles.water_active_button} disabled="true" >Auto Mode</button>:<button className={styles.water_active_button}  onClick={handleActiveHeadMotor}>{onOffHead?"Stop":"Start"}</button>
             ) : <button  className={styles.water_active_button} disabled="true" >Loading</button>
              }
          </div>

          </div>
        </div>
       
      </div>
    </div>
    </>
  )
}

export default SingleDevice


export async function getServerSideProps(context) {
  let serial = context.params;
  serial = serial.id;
  serial = serial.split('=');
  console.log(serial);
  return {
    props: {serial}, // will be passed to the page component as props
  }
}