import React from 'react'
import Home from './pages/Home'
import {Routes, Route} from 'react-router-dom'
import Course from './components/Course'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:course' element={<Course />} />
      </Routes>
    </div>
  )
}
