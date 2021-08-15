import React from 'react'
import './submenu.css'

const submenu = () => {
    return (
        <div className="container-fluid" style={{display:"flex"}}>
            <a className="innerm active">All</a>
            <a className="innerm">Video</a>
            <a className="innerm">Listen</a>
            <a className="innerm">Audio</a>
        </div>
    )
}

export default submenu
