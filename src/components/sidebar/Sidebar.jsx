import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./sidebar.scss"
import Hotel_img from "../../assets/logo.jpg"
import { MdHomeFilled } from "react-icons/md";
import { LiaDoorOpenSolid } from "react-icons/lia";
import { AiOutlineUser } from "react-icons/ai";
import { VscSmiley } from "react-icons/vsc";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { FaLock } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { GoChevronUp } from "react-icons/go";


export default function Sidebar() {
    const [components, setComponents] = useState([
        { id: 1, icon: <MdHomeFilled />, active: "main", path: "/main", title: "Bosh Sahifa" },
        { id: 2, icon: <LiaDoorOpenSolid />, active: "xonalar", path: "/xonalar", title: "Xonalar" },
        { id: 3, icon: <AiOutlineUser />, active: "xodimlar", path: "/xodimlar", title: "Xodimlar" },
        { id: 4, icon: <VscSmiley />, active: "mehmonlar", path: "/mehmonlar", title: "Mehmonlar" },
        { id: 5, icon: <HiOutlineBuildingOffice2 />, active: "tashkilotlar", path: "/tashkilotlar", title: "Tashkilotlat" },
        { id: 6, icon: <MdHomeFilled />, active: "sms", path: "/sms", title: "SMS" },
    ])
    const url = window.location.href.split("/").pop()
    const [btn_active, setBtn_active] = useState(false)

    const changeBtn = () => {
        setBtn_active(prev => !prev)
    }

    return (
        <aside className={`sidebar ${url === "" ? "hidden" : ""}`}>
            <Link to="/" className='sidebar__logo'>
                <img src={Hotel_img} alt="logo" />
            </Link>
            <ul>
                {
                    components?.map((item, index) => {
                        return <div className={`${url === item.active ? "sidebar_link-active" : ""}  sidebar__links`} key={index} >
                            <span className='sidebar__icon'>{item.icon}</span>
                            <Link to={item.path} key={index} className={` sidebar_link `} onClick={window.location.reload}>{item.title}</Link>
                            <div className={`${url === item.active ? "active_link" : ""} `}></div>
                        </div>
                    })
                }
            </ul>
            <div className={`${btn_active  ? "sidebar__change" : " sidebar__change2"} sidebar_change3`}>
                <h4>Shaxsiy sahifa</h4>
                <h4>Parolni o'zgartirish</h4>
                <hr />
                <h4>Chiqish</h4>
            </div>
            <div onClick={changeBtn} className=" sidabar__footer" >
                <button><FaLock /></button>
                <button ><FaRegUserCircle className='text-[20px] font-[700]' /> Name <GoChevronUp className='text-[18px]' /></button>
            </div>
        </aside>
    )
}
