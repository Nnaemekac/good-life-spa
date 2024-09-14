import WhyUsImage from "../../assets/images/why-us.jpg";
import LinkButton from "../LinkButton";
import SectionDuplicate from "../SectionDuplicate";
import AOS from 'aos';
import { useEffect } from "react";

export default function WhyUs(){
    useEffect(() => {
        AOS.init();
      }, [])
    return(
        <>
            <section className="iyd-header xui-pt-5 xui-pb-2 xui-overflow-x-hidden">
                <div className="xui-d-flex xui-flex-ai-center xui-lg-flex-dir-row xui-flex-dir-column-reverse xui-container">
                    <div data-aos="fade-right" data-aos-duration="800" className="xui-lg-col-7 xui-col-12">
                        <SectionDuplicate paragraphHeading="Why Choose Us" mainHeading="Discover Our Commitment" mainParagraph="Our commitment extends beyond treatments; it's a promise of exceptional care and personalized attention, designed to elevate your spa experience.">
                            <ul>
                                <li className="xui-d-flex xui-flex-ai-center xui-my-1-half">
                                    <svg width="15" height="15" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.8334 1.25L6.37502 12.7083L1.16669 7.5" stroke="#A43375" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <p className="xui-font-sz-85 xui-opacity-8 xui-pl-1" style={{"width": "calc(100% - 15px)"}}>Personalized spa treatments tailored to your needs.</p>
                                </li>
                                <li className="xui-d-flex xui-flex-ai-center xui-my-1-half">
                                    <svg width="15" height="15" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.8334 1.25L6.37502 12.7083L1.16669 7.5" stroke="#A43375" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <p className="xui-font-sz-85 xui-opacity-8 xui-pl-1" style={{"width": "calc(100% - 15px)"}}>Premium products for luxurious skincare and rejuvenation.</p>
                                </li>
                                <li className="xui-d-flex xui-flex-ai-center xui-my-1-half">
                                    <svg width="15" height="15" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.8334 1.25L6.37502 12.7083L1.16669 7.5" stroke="#A43375" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <p className="xui-font-sz-85 xui-opacity-8 xui-pl-1" style={{"width": "calc(100% - 15px)"}}>Expert therapists committed to your comfort and satisfaction.</p>
                                </li>
                                <li className="xui-d-flex xui-flex-ai-center xui-my-1-half">
                                    <svg width="15" height="15" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.8334 1.25L6.37502 12.7083L1.16669 7.5" stroke="#A43375" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <p className="xui-font-sz-85 xui-opacity-8 xui-pl-1" style={{"width": "calc(100% - 15px)"}}>Tranquil ambiance promoting deep relaxation and stress relief.</p>
                                </li>
                            </ul>
                        </SectionDuplicate>
                    </div>
                    <div data-aos="fade-left" data-aos-delay="200" data-aos-duration="800" className="xui-lg-col-5 xui-col-12 xui-lg-mb-none xui-mb-1-half">
                        <img className="xui-img-500 xui-h-400 xui-ml-auto xui-bdr-rad-1" src={WhyUsImage} alt="" />
                    </div>
                </div>
            </section>
          
    
        </>
    )
}