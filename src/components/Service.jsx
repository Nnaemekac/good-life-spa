import React from 'react';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";

const Service = (props) => {
    const { icon, serviceName, serviceDesc, servicePrice } = props;
    const mailToLink = `mailto:blessedadoyi@gmail.com?subject=Book Appointment&body=I would like to book a ${serviceName} service for ${servicePrice}.`;
    
    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <div data-aos="fade-in" data-aos-duration="800" className='ca-testimonial-card xui-bdr-rad-1'>
            <div className='profile xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle spa-bg-purple'>
                {icon}
            </div>
            <h3 className='xui-font-sz-120 xui-font-w-500 xui-mt-half bold-font'>{serviceName}</h3>
            <p className='xui-font-sz-85 xui-opacity-7 xui-mt-half xui-line-height-1-half'>{serviceDesc}</p>
            <p className='xui-font-sz-110 xui-mt-half bold-font xui-font-w-500 xui-line-height-1-half'>
                Price: &#8358;{servicePrice} | <Link to={mailToLink} className="xui-text-dc-underline xui-text-black xui-font-sz-85">Book Now</Link>
            </p>
        </div>
    );
};

export default Service;