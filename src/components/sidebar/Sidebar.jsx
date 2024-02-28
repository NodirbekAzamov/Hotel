import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./sidebar.scss"
import Hotel_img from "../../assets/logo.jpg"
import { MdHomeFilled } from "react-icons/md";
import { LiaDoorOpenSolid } from "react-icons/lia";
import { AiOutlineUser } from "react-icons/ai";
import { VscSmiley } from "react-icons/vsc";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

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
        </aside>
    )
}
