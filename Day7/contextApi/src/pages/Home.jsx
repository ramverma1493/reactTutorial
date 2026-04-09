import React from 'react'
import Dashboard from '../components/Dashboard'

export default function Home({username}) {
  return (
    <div>
      <Dashboard username={username}/>
    </div>
  )
}
