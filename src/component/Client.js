import React from "react";
import './test.css';
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";

function Client() {
    const [counterOn, setCounterOn] = useState(false);
    return (
        <>
            <h1 className="client-h1">A Glimpse of Satisfied Clients</h1>
            <div className="client-box-main">
                <div className="client-box">
                    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                        <h1 className="client-h1-count">
                            {counterOn && <CountUp start={0} end={6} duration={2} delay={0} />} +
                        </h1>
                        
                    </ScrollTrigger>
                    <p style={{fontWeight:"bold"}}>Years of Experience</p>
                </div>
                <div className="client-box">
                    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                        <h1 className="client-h1-count">
                            {counterOn && <CountUp start={0} end={129} duration={2} delay={0} />} +
                        </h1>
                    </ScrollTrigger>
                    <p style={{fontWeight:"bold"}}>Active Clients</p>
                </div>
                <div className="client-box">
                    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                        <h1 className="client-h1-count">
                            {counterOn && <CountUp start={0} end={98} duration={2} delay={0} />} %
                        </h1>
                    </ScrollTrigger>
                    <p style={{fontWeight:"bold"}}>Satisfied Client</p>
                </div>
            </div>
        </>
    )
}

export default Client;