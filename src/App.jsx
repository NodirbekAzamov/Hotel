import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sidebar from './components/sidebar/Sidebar'
import "./components/sidebar/sidebar.scss"
import Navbar from './components/navbar/Navbar'
import Main from './pages/Main/Main'
export default function App() {

  return (
    <div className=' app'>
      <div className='app_left'>
        <Sidebar />
      </div>
      <div className='app_right'>
        <div className='nav'>
        <Navbar/>
        </div>
        <Routes>
          <Route path='/' element={<Main/>}/>
        </Routes>

      </div>
    </div>
  )
}


