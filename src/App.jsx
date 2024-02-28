import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Sidebar from './components/sidebar/Sidebar'
import "./components/sidebar/sidebar.scss"
import Navbar from './components/navbar/Navbar'
import Main from './pages/Main/Main'
import Auth from './pages/Auth/Auth'
import useRoomStore from './store/RoomStore/RoomStore'
import Rooms from './pages/Rooms/Rooms'
export default function App() {

  const url = window.location.href.split("/").pop()
  const { getRooms } = useRoomStore()
  useEffect(() => {
    getRooms()
  }, [])
  console.log(url);
  return (
    <div className=' app'>
      <div className={`app_left ${url === "" ? "hidden" : ""}`}>
        <Sidebar />
      </div>
      <div className={`${url === "" ? " m-0" : "ml-[250px]"} app_right`}>
        <div className={url === "" ? "h-[0]" : "h-[82px]"}>
          <Navbar />
        </div>
        <Routes>
          <Route path='/' element={<Auth />} />
          <Route path='main' element={<Main />} />
          <Route path='xonalar' element={<Rooms />} />
        
        </Routes>

      </div>
    </div>
  )
}


