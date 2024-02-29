import React, { useEffect } from 'react'
import "./Main.scss"
import useRoomStore from '../../store/RoomStore/RoomStore'
const Main = () => {
  const {getRoomStatus} = useRoomStore()
  useEffect(()=> {
    getRoomStatus()
  },[])
  return (
    <div className='main'>
      <h1>Main</h1>
    </div>
  )
}

export default Main
