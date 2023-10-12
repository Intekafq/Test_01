import React, { useEffect } from "react";
import './test.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Footer()
{
    useEffect(() => {
        AOS.init();
    })
    return(
        <>
        <div className="footer">
            <div className="left-footer" data-aos="fade-right">
                <h1>Quick Links</h1>
                <ul>
                    <li>
                        My Story
                    </li>
                    <li>Service</li>
                    <li>Articles</li>
                    <li>Get in touch with Me</li>
                </ul>
            </div>
            <div className="right-footer" data-aos="fade-left">
                <h1>How to reach me ?</h1>
                <p>Hello@me.com</p>
                <p>City Mecca 254585 KSA</p>
            </div>
        </div>
        </>
    )
}

export default Footer