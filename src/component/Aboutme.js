import React, { useEffect } from "react";
import './test.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Aboutme() {
    useEffect(() => {
        AOS.init();
    })
    return (
        < div className="hello">
            <div className="main">
                <div className="head-1">
                    <p>About me</p>
                    <h2>Hello developer How Are you It's my job and you ?</h2>
                </div>
                <div className="container" >
                    <img src="logo512.png" alt="" data-aos="fade-right" data-aos-once="false"/>
                   
                    <ul className="bbb" data-aos="fade-left" data-aos-duration="3000">
                        <li> <strong>Experience: </strong>6 Years of Middle East Industry Expertise as a Content Marketing Manager</li>
                        <li> <strong>Previous Roles:</strong>  Content Writer, Copywriter, Senior Copywriter, Content Marketing Manager.</li>
                            <li>Feel free to explore my LinkedIn profile for more details.</li>
                            <li> <strong>Qualification:</strong> Betchelor degree Computer Scince </li>
                            <li> <strong>Contributed to Projects across: </strong>Saudi Arabia, india</li>
                            <button className="btn-2"> About me</button>
                    </ul>
                    
                </div>
                
            </div>
        </div>
    )
}
export default Aboutme;