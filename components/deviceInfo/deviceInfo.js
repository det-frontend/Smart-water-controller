import React from 'react'
import styles from '../../styles/DeviceInfo.module.css';
import { MdCancel } from 'react-icons/md';

function DeviceInfo({setOpenDeviceInfo}) {
    const handleOpenDevice = () => {
        setOpenDeviceInfo(false);
      document.querySelector('body').style.overflow = "initial";

    }
  return (
      <div className={styles.device_information}>
          <MdCancel className={styles.cancel} onClick={handleOpenDevice} />
          <div>
              <h3 className={styles.device_information_title}>Device Information</h3>
          </div>
          <div className={styles.device_info_div}>
              <div className={styles.device_model_container}>
                  <h3>Model</h3>
                  <p>TPDM</p>
              </div>
              <div className='device_serialnumber_container'>
                  <h3>Serialnumber</h3>
                  <p>990222120004</p>
              </div>
              <div className={styles.device_release_and_version_container}>
                  <div className='device_release'>
                      <h3>Release Date</h3>
                      <p>1022020</p>
                  </div>
                  <div className='device_version'>
                      <h3>Version</h3>
                      <p>2.0</p>
                  </div>

              </div>
              <div className='device_address_container'>
                  <h3>Mac Address</h3>
                  <p>Something</p>
              </div>
              <div className='device_hotline_container'>
                  <h3>Hotline</h3>
                  <p>+95 9408007788</p>
              </div>
          </div>
    </div>
  )
}

export default DeviceInfo