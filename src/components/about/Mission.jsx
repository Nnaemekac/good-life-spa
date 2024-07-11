import MissionImage from "../../assets/images/mission.png";
import LinkButton from "../LinkButton";
import SectionDuplicate from "../SectionDuplicate";

export default function Mission(){
    return(
        <>
            <section className="xui-pt-8 xui-pb-2">
                <div className="xui-d-flex xui-flex-ai-center xui-lg-flex-dir-row xui-flex-dir-column-reverse xui-container">
                    <div className="xui-lg-col-5 xui-col-12">
                        <SectionDuplicate paragraphHeading="Our Mission" mainHeading="Our Mission Statement" mainParagraph="At Good Life Spa, our mission is to enhance your well-being through personalized, high-quality spa treatments, creating a serene environment that promotes relaxation, rejuvenation, and holistic health.">
                            <LinkButton text="Learn More" route="/" customClass="xui-btn xui-bdr-rad-1-half xui-mt-1" />
                        </SectionDuplicate>
                    </div>
                    <div className="xui-lg-col-7 xui-col-12 xui-lg-mb-none xui-mb-1-half">
                        <img className="xui-img-600 xui-ml-auto" src={MissionImage} alt="" />
                    </div>
                </div>
            </section>
          
    
        </>
    )
}