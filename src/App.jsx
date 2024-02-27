import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sidebar from './sidebar/Sidebar'
import "./sidebar/sidebar.scss"
export default function App() {

  return (
    <div className=' app'>
      <div className='app_left'>
        <Sidebar />
      </div>
      <div className='app_right'>
        <h1>salom dunyo</h1>
        {/* <Routes>
          <Route />
        </Routes> */}
      </div>
    </div>
  )
}


