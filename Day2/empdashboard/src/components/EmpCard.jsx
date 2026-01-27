import React from 'react'

export default function EmpCard(props) {
  return (
    <div>
      <h1>Hi my name is {props.name} and my age is {props.age}. My salary is {props.sal}</h1>
    </div>
  )
}
