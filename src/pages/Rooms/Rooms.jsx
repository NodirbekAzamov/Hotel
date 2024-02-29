import React, { useEffect } from 'react'
import "./Rooms.scss"
import { RiUserLine } from "react-icons/ri";
import { RiDeleteBinLine } from "react-icons/ri";
import useRoomStore from '../../store/RoomStore/RoomStore';
import { LuEye } from "react-icons/lu";
import { CiEdit } from "react-icons/ci";

export default function Rooms() {
    const { rooms, getRooms, getRoomStatus, roomStatus } = useRoomStore()

    useEffect(() => {
        getRooms()
        getRoomStatus()
    }, [])
    return (
        <div className='room '>
            <table className=' rounded-[7px] overflow-hidden'>
                <tbody >
                    {
                        rooms?.map((item, index) => {
                            return <tr key={index} className='room__map'>
                                <td>{item.description}</td>
                                <td><button className=' px-[15px] py-[5px] cursor-default rounded-[5px] bg-slate-200 '>{roomStatus[index]?.name || "Oddiy"}</button></td>
                                <td>
                                    <div className='room_icon'>
                                        <RiUserLine />
                                        <RiUserLine />
                                    </div>
                                </td>
                                <td>
                                    <div className='room_btn'>
                                        <button><RiDeleteBinLine /> O'chirish</button>
                                        <button> <CiEdit />Tahrirlash</button>
                                        <button> <LuEye /> Ko'rish</button>
                                    </div>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

