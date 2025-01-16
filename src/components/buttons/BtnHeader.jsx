import React from 'react'
import styles from '../../styles/buttons/btnheader.module.css'
import { Link } from 'react-router-dom'
import { useStoreCalendly } from '../../utils/storeCalendly'


export const BtnHeader = ({text}) => {
    const {setCalendly}=useStoreCalendly()
  
  return (
    <Link  to='form' className={styles["button-header"]}>
    <div className={styles["dots_border_header"]}></div>
    <span className={styles["text_button_header"]}>{text}</span>
  </Link>
  
  )
}
