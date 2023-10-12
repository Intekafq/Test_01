import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
function Services() {
    useEffect(() => {
        AOS.init();
    })
    return (
        <div className="about">
            <div className="service-main" data-aos="zoom-in">
                <h3 className="h3-2"> What Service I Offer</h3>
                <p className="p2-2">My services as Content Marketing Manager are designed to enhance your brand's visibility, engage your audience, and drive meaningful results, ultimately contributing to your business growth and success.</p>
            </div>
            <div className="box-service" data-aos="zoom-in-left">
                <div className="box">
                    <img src="ser-icons1.png" alt="" style={{ backgroundColor: "white", height: 90 }} />
                    <h3>Content </h3>
                    <p>Creating tailored content strategies aligned with your business goals, identifying key themes, topics, and platforms to reach your target audience.</p>
                </div>
                <div className="box">
                    <img src="ser-icons2.png" alt="" style={{ backgroundColor: "white", height: 90 }} />
                    <h3>Content </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, veritatis.</p>
                </div>
                <div className="box">
                    <img src="ser-icons3.png" alt="" style={{ backgroundColor: "white", height: 90 }} />
                    <h3>Content </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, veritatis.</p>
                </div>
                <div className="box">
                    <img src="ser-icons1.png" alt="" style={{ backgroundColor: "white", height: 90 }} />
                    <h3>Content </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, veritatis.</p>
                </div>
                <div className="box">
                    <img src="ser-icons2.png" alt="" style={{ backgroundColor: "white", height: 90 }} />
                    <h3>Content </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, veritatis.</p>
                </div>
                <div className="box">
                    <img src="ser-icons3.png" alt="" style={{ backgroundColor: "white", height: 90 }} />
                    <h3>Content </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, veritatis.</p>
                </div>
            </div>
        </div>
    )
}

export default Services;