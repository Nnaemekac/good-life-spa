import TeamImage from "../../assets/images/team1.jpeg";
import TeamImage2 from "../../assets/images/team2.jpeg";
import LinkButton from "../LinkButton";
import SectionDuplicate from "../SectionDuplicate";
import { EffectFade, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Teams(){
    return(
        <>
            <section className="xui-pt-5 xui-pb-2">
                <div className="xui-d-flex xui-flex-ai-center xui-lg-flex-dir-row xui-flex-dir-column-reverse xui-container">
                    <div className="xui-lg-col-6 xui-col-12">
                        <Swiper
                        className="team-swiper"
                        slidesPerView={1}
                        spaceBetween={20}
                        effect='fade'
                        modules={[Autoplay, EffectFade]}
                        autoplay={true}
                    >
                        <SwiperSlide>
                            <img className="xui-w-fluid-100 xui-h-fluid-100 xui-bdr-rad-1" src={TeamImage} alt="" />
                        </SwiperSlide>
                        {/* Repeat SwiperSlide for each slide */}
                        <SwiperSlide>
                            <img className="xui-w-fluid-100 xui-h-fluid-100 xui-bdr-rad-1" src={TeamImage2} alt="" />
                        </SwiperSlide>
                        
                    </Swiper>
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