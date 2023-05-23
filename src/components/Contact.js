import React from 'react'
import Instagram_icon from '../assets/Instagram_icon.png'
import Facebook_icon from '../assets/Faceboon-icon.png'
import GitHub_icon from '../assets/GitHub-icon.png'
import Gmail_icon from '../assets/Gmail-icon.png'

export default function Contact() {
    return (
        <div>
            <br /><br /><br /><br /><br />

            <h1 class="h1">Contact Me</h1>

            <div class="contact">
                <div>
                    <a href="https://www.instagram.com/aryansanghi11/">
                    <img src={Instagram_icon} width="90" height="90" alt='instagram'/></a>
                </div>
                <div>
                    <a href="https://www.facebook.com/people/Aryan-Sanghi/100086674040207/">
                    <img src={Facebook_icon} width="90" height="90" alt='facebook'/></a>
                </div>
                <div>
                    <a href="hhttps://github.com/DragmonX">
                    <img src={GitHub_icon} width="110" height="110" alt='github'/></a>
                </div>
                <div>
                    <a href="mailto:aryansanghi2004@gmail.com">
                    <img src={Gmail_icon} width="110" height="80" alt='gmail'/></a>
                </div>
            </div>
        </div>
    )
}
