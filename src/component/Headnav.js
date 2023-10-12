import React, { useEffect, useState } from "react";
import './test.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
function Headnav() {
    const [nav,setNav] = useState(false)
    // const [fix, setFix]= useState(false);

    // function setFixed(){
    //     if(window.scrollY >= 392)
    //     {
    //         setFix(true)
    //     }else{
    //         setFix(false)
    //     }
    // }
    // window.addEventListener("scroll", setFixed)
    useEffect(()=>{
        AOS.init();
    })
    return (
        <>
            <div className="first-nav">
                <h3>Curious about your content? Experience a FREE full-page analysis of your existing content today!</h3>
            </div>
            <div className="navbar">
                <div className="logo">
                    <h2>Intekhab</h2>
                </div>
                <div className="mobile-menu" onClick={()=> setNav(!nav)}>
                    {nav ? <AiOutlineClose/>: <AiOutlineMenu/> }
                </div>
              
                <div className="navmenu">
                    <ul className={nav ? "nav-mobile" : "ul-1"} onClick={()=> setNav(false)}>
                        <li className="li-1">Home</li>
                        <li className="li-1">My Story</li>
                        <li className="li-1">Services</li>
                        <li className="li-1">Article</li>
                        <li className="li-1">Get in touch with Me</li>
                    </ul>
                </div>

                <button className="btn-nav"><span>WhatsApp Me</span></button>

            </div>
        </>
    )
}

export default Headnav;