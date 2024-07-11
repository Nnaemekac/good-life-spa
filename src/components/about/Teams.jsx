import TeamImage from "../../assets/images/team.png";
import LinkButton from "../LinkButton";
import SectionDuplicate from "../SectionDuplicate";

export default function Teams(){
    return(
        <>
            <section className="xui-pt-5 xui-pb-2">
                <div className="xui-d-flex xui-flex-ai-center xui-lg-flex-dir-row xui-flex-dir-column-reverse xui-container">
                    <div className="xui-lg-col-6 xui-col-12">
                        <img className="xui-img-600" src={TeamImage} alt="" />
                    </div>
                    <div className="xui-lg-col-6 xui-col-12 xui-lg-pl-2 xui-pl-none xui-lg-mb-none xui-mb-1-half">
                        <SectionDuplicate paragraphHeading="The Team" mainHeading="Meet The Team" mainParagraph="Dedicated professionals committed to your wellness journey, who bring expertise, passion, and personalized care to every visit at Good Life Spa. Together, we strive to exceed your expectations and enhance your well-being through our holistic approach to spa services.">
                        </SectionDuplicate>
                    </div>
                </div>
            </section>
          
    
        </>
    )
}