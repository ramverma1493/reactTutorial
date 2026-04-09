import React, { useContext } from 'react'
import Courses from './Courses'
import myContext from '../store/mycontext'

export default function Dashboard() {
    let user = useContext(myContext)

  return (
    <div>
      <h2>Hey {user}, Welcome to Home page</h2>
      This much you completed 10 class and attendence is 60%
      <Courses />
    </div>
  )
}
