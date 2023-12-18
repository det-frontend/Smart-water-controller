import styles from '../../styles/AddNewDevice.module.css';
import { useState } from 'react';
import { AiOutlineNumber } from 'react-icons/ai';
import { MdLabelOutline } from 'react-icons/md';
import { MdCancel } from 'react-icons/md';

function NewDevice({ setOpenNewDevice, setFakeArray }) {
  
  const [name, setName] = useState('');
  const [serialNumber, setSerialNumber] = useState('');

  const handleCancle  = () => {
      document.querySelector('body').style.overflow = "initial";
    
    setOpenNewDevice(false);
  }

  const handleAdd = (e) => {
    e.preventDefault();
    const newData = { serialNumber: serialNumber, name: name, isActive: true };
    setFakeArray((fakeArray) => [...fakeArray, newData]);
    setOpenNewDevice(false);
      document.querySelector('body').style.overflow = "initial";

    
  }
  return (
    <div className={styles.newDevice}>
      <div onClick={handleCancle} className={styles.cancle}>
        <MdCancel size={25}/>
      </div>
      <h3 className={styles.newDeviceTitle}>Add New Device</h3>  
      <form className={styles.form_container}>
        <div className={styles.numberContainer}>
          <AiOutlineNumber/>
           <input type="text" value={serialNumber} onChange={(e)=>(setSerialNumber(e.target.value))} placeholder='Serialnumber'/>
        </div>
        <div className={styles.nameContainer}>
          <MdLabelOutline/>
          <input type="text" value={name} onChange={(e)=>(setName(e.target.value))} placeholder='DeviceName'/>
        </div>
      <button className={styles.addButton} onClick={handleAdd} type="submit">Add</button>
      </form> 
    </div>
  )
}

export default NewDevice