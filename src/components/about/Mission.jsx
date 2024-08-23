import MissionImage from "../../assets/images/mission.png";
import LinkButton from "../LinkButton";
import SectionDuplicate from "../SectionDuplicate";

export default function Mission(){
    return(
        <>
            <section className="xui-pt-8 xui-pb-2">
                <div className="xui-d-flex xui-flex-ai-center xui-lg-flex-dir-row xui-flex-dir-column-reverse xui-container">
                    <div className="xui-lg-col-5 xui-col-12">
                        <SectionDuplicate paragraphHeading="Our Mission" mainHeading="Our Mission Statement" mainParagraph="At the good life spa our mission is to create a serene and welcoming space where guests can escape the stresses of everyday life and experience a deeper sense of calm and wellness .we are dedicated to providing personalized results driven treatments and exceptional customer service guiding our guests on their journey towards relaxation ,rejuvenation and self discovery.">
                            {/* <LinkButton text="Learn More" route="/" customClass="xui-btn xui-bdr-rad-1-half xui-mt-1" /> */}
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