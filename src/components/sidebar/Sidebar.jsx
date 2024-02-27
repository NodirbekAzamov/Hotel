import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./sidebar.scss"
export default function Sidebar() {
    const [components, setComponents] = useState([
        { id: 1, active: "", path: "/", title: "Bosh Sahifa" },
        { id: 2, active: "xonalar", path: "/xonalar", title: "Xonalar" },
        { id: 3, active: "xodimlar", path: "/xodimlar", title: "Xodimlar" },
        { id: 4, active: "mehmonlar", path: "/mehmonlar", title: "Mehmonlar" },
        { id: 5, active: "tashkilotlar", path: "/tashkilotlar", title: "Tashkilotlat" },
        { id: 6, active: "sms", path: "/sms", title: "sms" },
    ])
    const [activeLink, setActiveLink] = useState(1)

    const url = window.location.href.split("/").pop()

    return (
        <aside className='sidebar'>
            <Link>
            <img src="" alt="logo" /></Link>
            <ul>
                {
                    components?.map((item, index) => {
                        return <div className='sidebar__links' key={index}>
                            <Link to={item.path} key={index} className={`${url === item.active ? "sidebar_link-active" : ""} sidebar_link `}>{item.title}</Link>
                            <div className={`${url === item.active ? "active_link" : ""} `}></div>
                        </div>
                    })
                }
            </ul>
        </aside>
    )
}
