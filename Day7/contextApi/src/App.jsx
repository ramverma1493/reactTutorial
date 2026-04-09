import React from 'react'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import HTML from './pages/HTML'
import JavaScript from './pages/JavaScript'
import myContext from './store/mycontext'

export default function App() {
  let user = "Ramendra" 
  return (
    <div>
      <myContext.Provider value={user}>
        <Routes>
          {/* 
          <Route path='/' element={<Home username={user}/>}/>
          <Route path='/html' element={<HTML username={user}/>}/>
          <Route path='/js' element={<JavaScript username={user}/>}/> 
          */}
          
          <Route path='/' element={<Home/>}/>
          <Route path='/html' element={<HTML/>}/>
          <Route path='/js' element={<JavaScript/>}/>
        </Routes>
      </myContext.Provider>
    </div>
  )
}
