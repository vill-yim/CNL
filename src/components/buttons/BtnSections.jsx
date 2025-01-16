import React from 'react'
import styles from '../../styles/buttons/btnSection.module.css'
import { useStoreCalendly } from '../../utils/storeCalendly'


export const BtnSections = () => {
      const {setCalendly}=useStoreCalendly()
  return (
    <div onClick={() => setCalendly(true)} className={styles["btn-sec"]}>
    <button className={styles["btn-12"]}><span>Book a call</span></button>
    </div>
  )
}
