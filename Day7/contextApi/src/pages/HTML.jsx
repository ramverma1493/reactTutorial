import React from 'react'
import { useContext } from 'react'
import myContext from '../store/mycontext'

export default function HTML() {
    let user = useContext(myContext)
  return (
    <div>
      <h2>Hey {user}, Welcome to HTML</h2>
      All the best!
    </div>
  )
}
