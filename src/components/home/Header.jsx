import CountUp from "react-countup";
import HeaderImage from "../../assets/images/header-image.jpeg";
import LinkButton from "../LinkButton";

export default function Header(){
    return(
        <>
            <section className="iyd-header xui-pt-8 xui-pb-2">
                <div className="xui-d-flex xui-flex-ai-center xui-lg-flex-dir-row xui-flex-dir-column-reverse xui-container">
                    <div className="xui-lg-col-7 xui-col-12">
                        <h1 className="xui-lg-font-sz-250 xui-font-sz-200 xui-lg-w-fluid-90 xui-w-fluid-100 xui-font-w-600 bold-font xui-font-w-100">Discover Tranquility and Rejuvenation at Good Life Spa</h1>
                        <p className="xui-opacity-8 xui-lg-w-fluid-80 xui-w-fluid-100 xui-line-height-1-half xui-font-sz-85 xui-mt-half">Step into serene luxury with our signature treatments, designed to relax and rejuvenate your body and mind. Experience ultimate spa care in a tranquil oasis.</p>
                        <div className="xui-mt-1">
                            <LinkButton text="Call us now" route="tel:+234 567 896 8000" customClass="xui-btn xui-bdr-rad-1-half" />
                            <LinkButton text="Explore More" route="/about" customClass="xui-btn explore-btn xui-bdr-rad-1-half xui-ml-1 xui-font-w-bold bold-font" />
                        </div>
                        <div className="xui-d-flex xui-flex-ai-center xui-mt-1-half">
                            <div className="stat xui-px-1-half">
                                <h3 className="xui-font-sz-150 bold-font xui-font-w-bold"><CountUp start={0} end={200} duration={2} />+</h3>
                                <p className="xui-font-sz-85 xui-mt-half xui-opacity-6">Happy Customers</p>
                            </div>
                            <div className="stat xui-px-1-half">
                                <h3 className="xui-font-sz-150 bold-font xui-font-w-bold"><CountUp start={0} end={120} duration={2} />+</h3>
                                <p className="xui-font-sz-85 xui-mt-half xui-opacity-6">Positive Reviews</p>
                            </div>
                            <div className="stat xui-px-1-half">
                                <h3 className="xui-font-sz-150 bold-font xui-font-w-bold"><CountUp start={0} end={4} duration={2} />y+</h3>
                                <p className="xui-font-sz-85 xui-mt-half xui-opacity-6">Market Experience</p>
                            </div>
                        </div>
                    </div>
                    <div className="xui-lg-col-5 xui-col-12 xui-lg-mb-none xui-mb-1-half">
                        <img className="xui-img-500 xui-ml-auto" src={HeaderImage} alt="" />
                    </div>
                </div>
            </section>
          
    
        </>
    )
}