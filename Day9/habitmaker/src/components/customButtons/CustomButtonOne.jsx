import React from 'react'
import styles from './CustomButtonOne.module.css'

export default function CustomButtonOne({btnTxt = 'Submit', clsName = '', handler=()=>{console.log('I am Empty')}}) {
  return (
    <button className={`${styles.btn} ${clsName}`} onClick={handler}>{btnTxt}</button>
  )
}
