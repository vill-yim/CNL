import React from 'react'
import styles from "../../styles/buttons/btnTestimonials.module.css";
import { useStoreCalendly } from '../../utils/storeCalendly'

export const BtnTestimonials = ({txt}) => {
      const {setCalendly}=useStoreCalendly()
  
  return (
<button onClick={() => setCalendly(true)}  className={styles["Btn"]}>
   <span>{txt}</span>
</button>
  )
}

