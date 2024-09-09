import MissionImage from "../../assets/images/mission.png";
import LinkButton from "../LinkButton";
import SectionDuplicate from "../SectionDuplicate";

export default function Mission(){
    return(
        <>
            <section className='xui-py-3 xui-container'>
                <SectionDuplicate customClass="xui-text-center" isAutoMargin={true} paragraphHeading="Our Mission" mainHeading="Our Mission Statement" mainParagraph="At the good life spa our mission is to create a serene and welcoming space where guests can escape the stresses of everyday life and experience a deeper sense of calm and wellness .we are dedicated to providing personalized results driven treatments and exceptional customer service guiding our guests on their journey towards relaxation ,rejuvenation and self discovery.">
                    {/* <LinkButton text="Learn More" route="/" customClass="xui-btn xui-bdr-rad-1-half xui-mt-1" /> */}
                </SectionDuplicate>

                <img className="xui-w-fluid-100 xui-mt-4" src={MissionImage} alt="" />
            </section>
    
        </>
    )
}