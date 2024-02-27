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

        <h1>Lorem ipsum dolor sit amet, consectetur adipisic. Eius repellat quaerat eligendi minus sit error, non nisi porro, numquam suscipit deleniti dignissimos fugiat aut animi odio perferendis, laboriosam quibusdam explicabo!</h1>

        {/* <Routes>
          <Route />
        </Routes> */}
      </div>
    </div>
  )
}


