import React from 'react'
import MyPic from '../assets/MyPic.png'

export default function Home() {
    return (
        <div>
            <div className="flex-container">
                <div style={{ width: '100%' }}><font size="100">Hi, I am Aryan Sanghi</font>
                    <br />
                    <font size="5">I am a CSE undergrad at IIT Kharagpur</font>
                </div>
                <div style={{ width: '100%' }}>
                    <img src={MyPic} width="600" height="750" align="right" alt=''/>
                </div>
            </div>
        </div>
    )
}