import React from 'react'
import './SidebarLeftItem.css';

function SidebarLeftItem({icon,text}) {
    return (
        <div className="sidebarLeft-row">
            <div className="icon">
                {icon}
            </div>
            <div className="text">
                <h5>{text}</h5>
            </div>
        </div>
    )
}

export default SidebarLeftItem
