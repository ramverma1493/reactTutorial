import React from 'react'
import panda from '../assets/panda.webp'
import './style.css'

export default function Author({clk}) {
  return (
    <div className='author'>
      <p>Clicked*2: {clk}</p>
      
      <div className="profile">
        <img src={panda} alt="panda" />
        <p className="title">Panda Ji</p>
      </div>

      <div id="bio">
        <p>Email: google@google.com</p>
        <p>Role: Manager</p>
        <p>Department: IT</p>
      </div>

    </div>
  )
}
