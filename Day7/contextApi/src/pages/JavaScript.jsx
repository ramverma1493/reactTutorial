import React, { useContext } from 'react'
import myContext from '../store/mycontext'

export default function JavaScript() {
    let user = useContext(myContext)

  return (
    <div>
      <h2>Hey {user}, Welcome to JavaScript</h2>
      All the best!
    </div>
  )
}
