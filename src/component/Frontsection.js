import React, { useEffect } from "react";
import './test.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Front() {
    useEffect(() => {
        AOS.init();
    })
    return (
        <>
            <div className="section">
                <div className="leftsection" data-aos="fade-right" data-aos-duration="2000" data-aos-once="false">
                    <h2 className="h2-1">Welcome to the My Web-world</h2>
                    <p className="p-1">Strong understanding of HTML, CSS, and JavaScript <br />
                        Back-end development skills (Python, PHP, Ruby on Rails, etc.) <br />
                        Database experience <br />
                        Version control system experience <br />
                        Problem-solving and analytical skills <br />
                        Effective communication skills</p>

                </div>
                <div className="rightsection" data-aos="fade-left" data-aos-duration="2000">
                    <img src="right1.jpeg" alt="" />

                </div>

            </div>
            <div>
                <p className="p-2" data-aos="zoom-in">Looking for a Content Marketing Manager who can elevate your brand's voice and bring your vision to life?</p>
                <h1 className="h1-1" data-aos="zoom-in">Your search ends here</h1>
            </div>

        </>
    )
}

export default Front;