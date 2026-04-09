import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function home() {
  let navigate = useNavigate()

  let frontHandler = () => {
    navigate('/frontend')
  }

  let backHandler = () => {
    navigate('/backend')
  }

  return (
    <div>
      <h1>Welcome to Home Page</h1>
      <h4>Select your Course</h4>

      <button onClick={frontHandler}>Frontend</button>
      <button onClick={backHandler}>Backend</button>
    </div>
  )
}
