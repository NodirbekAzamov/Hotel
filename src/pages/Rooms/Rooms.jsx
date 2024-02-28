import React from 'react'
import "./Rooms.scss"
import { RiUserLine } from "react-icons/ri";
import { RiDeleteBinLine } from "react-icons/ri";

export default function Rooms() {
    return (
        <div className='room'>
            <div>
                <h6>101</h6>
                <button>Band Etilgan</button>
                <div className='room_icon'>
                    <RiUserLine />
                    <RiUserLine />
                </div>
                <h5>05.05-07.05 gacha</h5>
                <p>Lyuks</p>
                <div className='room_btn'>
                    <button><RiDeleteBinLine /> O'chirish</button>
                    <button>O'zgartirish</button>
                    <button>Ko'rish</button>
                </div>
            </div>
        </div>
    )
}
