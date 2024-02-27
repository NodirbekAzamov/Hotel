import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sidebar from './components/sidebar/Sidebar'
import "./components/sidebar/sidebar.scss"
export default function App() {

  return (
    <div className=' app'>
      <div className='app_left'>
        <Sidebar />
        
      </div>
      <div className='app_right'>
        {/* <Routes>
          <Route />
        </Routes> */}
      </div>
    </div>
  )
}


