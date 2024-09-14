import CountUp from "react-countup";
import bgImage from "../../assets/images/header-image2.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Header(){
    useEffect(() => {
        AOS.init();
      }, [])
    return(
        <>
            <section className="xui-bg-sz-cover xui-bg-pos-center" style={{"backgroundImage": `url('${bgImage}')`}}>
                <div className="xui-overlay-2 xui-h-fluid-100 xui-pt-8 xui-pb-5 xui-container">
                <div className="xui-mt-4">
                    <h1 data-aos="fade-up" data-aos-duration="800" className="xui-lg-font-sz-300 xui-font-sz-200 xui-lg-w-fluid-70 xui-w-fluid-100 xui-font-w-600 xui-font-w-100">More Than Therapists, We're Your Partners in Wellness</h1>
                    <p data-aos="fade-up" data-aos-delay="200" data-aos-duration="800" className="xui-opacity-8 xui-lg-w-fluid-45 xui-w-fluid-100 xui-line-height-1-half xui-font-sz-85 xui-mt-half">Guiding you to holistic well-being with personalized care and expertise. At Good Life Spa, we prioritize your relaxation and ensure each visit leaves you refreshed and revitalized.</p>
                    <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="800" className="xui-d-inline-flex xui-flex-ai-center xui-mt-1-half header-stats">
                        <div className="stat xui-px-1-half">
                            <h3 className="xui-font-sz-150 xui-font-w-bold"><CountUp start={0} end={200} duration={2} />+</h3>
                            <p className="xui-font-sz-85 xui-mt-half xui-opacity-6">Happy Customers</p>
                        </div>
                        <div className="stat xui-px-1-half">
                            <h3 className="xui-font-sz-150 xui-font-w-bold"><CountUp start={0} end={120} duration={2} />+</h3>
                            <p className="xui-font-sz-85 xui-mt-half xui-opacity-6">Positive Reviews</p>
                        </div>
                        <div className="stat xui-px-1-half">
                            <h3 className="xui-font-sz-150 xui-font-w-bold"><CountUp start={0} end={4} duration={2} />y+</h3>
                            <p className="xui-font-sz-85 xui-mt-half xui-opacity-6">Market Experience</p>
                        </div>
                    </div>
                </div>
                </div>
            </section>
          
    
        </>
    )
}