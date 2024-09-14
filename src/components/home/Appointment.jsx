import AppointmentImage from "../../assets/images/appointment.jpg";
import LinkButton from "../LinkButton";
import SectionDuplicate from "../SectionDuplicate";

export default function Appointment(){
    return(
        <>
            <section className="xui-pt-5 xui-pb-2">
                <div className="xui-d-flex xui-flex-ai-center xui-lg-flex-dir-row xui-flex-dir-column-reverse xui-container">
                    <div className="xui-lg-col-5 xui-col-12">
                        <img className="xui-img-500 xui-h-400 xui-bdr-rad-1" src={AppointmentImage} alt="" />
                    </div>
                    <div className="xui-lg-col-7 xui-col-12 xui-lg-pl-2 xui-pl-none xui-lg-mb-none xui-mb-1-half">
                        <SectionDuplicate paragraphHeading="Book An Appointment" mainHeading="Escape To Rejuvenation" mainParagraph="Schedule your escape to relaxation and rejuvenation today. Our easy booking process ensures you can reserve your preferred treatments and times with just a few clicks. Start your journey to tranquility now.">
                            <LinkButton text="Call to book appointment" route="tel:+234 567 896 8000" customClass="xui-btn xui-bdr-rad-1-half xui-mt-1" />
                        </SectionDuplicate>
                    </div>
                </div>
            </section>
          
    
        </>
    )
}