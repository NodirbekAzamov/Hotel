import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./sidebar.scss"
export default function Sidebar() {
    const [components, setComponents] = useState([
        { id: 1, path: "/", title: "Bosh Sahifa" },
        { id: 2, path: "/honalar", title: "Honalar" },
        { id: 3, path: "/hodimlar", title: "Hodimlar" },
        { id: 2, path: "/honalar", title: "Xonalar" },
        { id: 3, path: "/hodimlar", title: "Xodimlar" },
        { id: 4, path: "/mehmonlar", title: "Mehmonlar" },
        { id: 5, path: "/tashkilotlar", title: "Tashkilotlat" },
        { id: 6, path: "/sms", title: "SMS" },
    ])
    const [activeLink, setActiveLink] = useState(1)
   const url = window.location.href.split("/").pop()
    const active_link = () => {
            if (url == components.path) {
                setActiveLink(url)
            }
    }
    return (
        <aside className='sidebar'>
            <ul>
                {
                    components?.map((item, index) => {
                        return <div className='sidebar__links' key={index}>
                            <Link to={item.path} key={index}>{item.title}</Link>
                            <div onClick={active_link} className={`${activeLink ? "active_link" : ""} `}></div>
                        </div>
                    })
                }
            </ul>
        </aside>
    )
}
