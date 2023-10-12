import React from "react";
import './test.css';
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";
function Choose()
{
    const [counterOn, setCounterOn] = useState(false);
    return(
        <>
        <div className="top-choose">
           
            <h1 className="choose-h1">Why Choose Me</h1>

            <h2 className="choose-h2">In a sea of words, finding the right voice to tell your story is crucial <br /> That's where I come in -a Content Marketing ManagerWith a passion for creativity</h2>
            
        </div>
        <div className="choose-main">
            <div className="box-choose-1">
            <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
            <h1>
               { counterOn && <CountUp start={0} end={100} duration={2} delay={0}/>}
            </h1>
            </ScrollTrigger>
                <h3>Proven Expertise</h3>
                <p>With a track record as a successful Content Marketing Manager who has a deep understanding of industry best practices, I bring a wealth of knowledge and skills to help your brand stand out in a competitive digital landscape.</p>
            </div>
            <div className="box-choose-1">
            <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
            <h1>
               { counterOn && <CountUp start={0} end={100} duration={2} delay={0}/>}
            </h1>
            </ScrollTrigger>
                <h3>Full-Service Solutions</h3>
                <p>From Content Creation and Distribution to SEO Optimization , I offer a comprehensive suite of services as a Content Marketing Manager, making it convenient for you to consolidate your efforts.</p>
            </div>
            
        </div>
        <button className="btn-choose">Start Consultation</button>
        </>
    )
}

export default Choose;