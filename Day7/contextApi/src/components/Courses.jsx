import React from 'react'
import { Link } from 'react-router-dom'

export default function Courses() {
  return (
    <div>
      <h2>Find all Your Courses</h2>
      <Link to="/html">HTML</Link> <br />
      <Link to="/js">JavaScript</Link>
    </div>
  )
}
