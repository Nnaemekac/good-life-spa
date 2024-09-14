import { Link } from "react-router-dom";
import AppointmentImage from "../../assets/images/appointment.jpg";
import LinkButton from "../LinkButton";
import SectionDuplicate from "../SectionDuplicate";
import AOS from 'aos';
import { useEffect } from "react";

export default function Appointment(){
    useEffect(() => {
        AOS.init();
      }, [])
    return(
        <>
            <section className="xui-pt-5 xui-pb-2">
                <div className="xui-d-grid xui-lg-grid-col-2 xui-grid-col-1 xui-flex-ai-center xui-lg-flex-dir-row xui-flex-dir-column-reverse xui-container">
                    <div data-aos="fade-right" data-aos-duration="800" className="">
                        <img className="xui-img-500 xui-h-400 xui-bdr-rad-1" src={AppointmentImage} alt="" />
                    </div>
                    <div data-aos="fade-left" data-aos-delay="200" data-aos-duration="800" className=" xui-lg-mb-none xui-mb-1-half">
                        <SectionDuplicate paragraphHeading="Book An Appointment" mainHeading="Escape To Rejuvenation" mainParagraph="Schedule your escape to relaxation and rejuvenation today. Our easy booking process ensures you can reserve your preferred treatments and times with just a few clicks. Start your journey to tranquility now.">
                            <div className="xui-d-grid xui-lg-grid-col-2 xui-grid-col-1 xui-grid-gap-1 xui-mt-1-half">
                                <Link to={"tel:+234 567 896 8000"} className="spa-bg-purple xui-py-1 xui-px-1 xui-text-white xui-font-sz-90 xui-text-dc-none xui-text-center xui-bdr-rad-1-half">Call to book an appointment</Link>
                                <Link to={"mailto:blessedadoyi@gmail.com?subject="+ "&body="} className="spa-bg-purple xui-py-1 xui-px-1 xui-text-white xui-font-sz-90 xui-text-dc-none xui-text-center xui-bdr-rad-1-half explore-btn">Send us a message</Link>
                            </div>
                        </SectionDuplicate>
                    </div>
                </div>
            </section>
          
            {/* git push good-life-spa master */}
        </>
    )
}