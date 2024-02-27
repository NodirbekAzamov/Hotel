import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./sidebar.scss"
export default function Sidebar() {
    const [components, setComponents] = useState([
        { id: 1, path: "bosh_sahifa", title: "Bosh Sahifa" },
        { id: 2, path: "honalar", title: "Honalar" },
        { id: 3, path: "hodimlar", title: "Hodimlar" },
        { id: 4, path: "mehmonlar", title: "Mehmonlar" },
        { id: 5, path: "tashkilotlar", title: "Tashkilotlat" },
        { id: 6, path: "sms", title: "SMS" },
    ])
    return (
        <div className='sidebar'>
            <ul>
                {
                    components?.map((item, index) => {
                        return <Link to={item.path} key={index}>{item.title}</Link>
                    })
                }
            </ul>
        </div>
    )
}
