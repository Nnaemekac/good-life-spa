
import { Swiper, SwiperSlide } from 'swiper/react';
import Facials from "../Facials";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useEffect } from 'react';
import Pedicure from '../Pedicure';

export default function Services() {
    return (
        <>
            <section className='xui-px-none xui-lg-py-1'>
                <h2 className='xui-font-sz-200 xui-lg-font-sz-250 xui-text-center bold-font xui-font-w-500 xui-lg-px-4'>
                    Our Services / Pricings
                </h2>
                <div className='xui-text-black xui-bdr-rad-2 xui-mt-1 xui-px-1 xui-lg-px-none xui-py-2 xui-lg-py-2'>
                    <h2 className='xui-font-sz-150 xui-lg-font-sz-200 bold-font xui-font-w-500 xui-lg-w-fluid-70 xui-lg-px-4'>
                        Massage
                    </h2>
                    <div className='xui-mt-half'>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={20}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1.2,
                                    slidesOffsetBefore: 8,
                                    slidesOffsetAfter: 8,
                                    spaceBetween: 12,
                                },
                                1024: {
                                    slidesPerView: 4,
                                },
                            }}
                        >
                            <SwiperSlide>
                                <div className='ca-testimonial-card xui-bdr-rad-1'>
                                    <div className='xui-d-flex xui-flex-ai-center xui-flex-jc-space-between'>
                                        <div className='xui-d-inline-flex xui-flex-ai-center xui-grid-gap-half'>
                                            <div className='profile xui-bdr-rad-circle spa-bg-purple'></div>
                                            <span className='xui-font-sz-110 xui-font-w-500'>
                                                Deep tissue massage
                                            </span>
                                        </div>
                                    </div>
                                    <div className='testimony-box xui-mt-1 xui-bdr-rad-1'>
                                        <p className='xui-font-sz-180 bold-font xui-font-w-500 xui-line-height-1-half'>
                                            &#8358; 25,000
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* Repeat SwiperSlide for each slide */}
                            <SwiperSlide>
                                <div className='ca-testimonial-card xui-bdr-rad-1'>
                                    <div className='xui-d-flex xui-flex-ai-center xui-flex-jc-space-between'>
                                        <div className='xui-d-inline-flex xui-flex-ai-center xui-grid-gap-half'>
                                            <div className='profile xui-bdr-rad-circle spa-bg-purple'></div>
                                            <span className='xui-font-sz-110 xui-font-w-500'>
                                                Swedish massage
                                            </span>
                                        </div>
                                    </div>
                                    <div className='testimony-box xui-mt-1 xui-bdr-rad-1'>
                                        <p className='xui-font-sz-180 bold-font xui-font-w-500 xui-line-height-1-half'>
                                            &#8358; 20,000
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='ca-testimonial-card xui-bdr-rad-1'>
                                    <div className='xui-d-flex xui-flex-ai-center xui-flex-jc-space-between'>
                                        <div className='xui-d-inline-flex xui-flex-ai-center xui-grid-gap-half'>
                                            <div className='profile xui-bdr-rad-circle spa-bg-purple'></div>
                                            <span className='xui-font-sz-110 xui-font-w-500'>
                                                Nuru massage
                                            </span>
                                        </div>
                                    </div>
                                    <div className='testimony-box xui-mt-1 xui-bdr-rad-1'>
                                        <p className='xui-font-sz-180 bold-font xui-font-w-500 xui-line-height-1-half'>
                                            &#8358; 45,000
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='ca-testimonial-card xui-bdr-rad-1'>
                                    <div className='xui-d-flex xui-flex-ai-center xui-flex-jc-space-between'>
                                        <div className='xui-d-inline-flex xui-flex-ai-center xui-grid-gap-half'>
                                            <div className='profile xui-bdr-rad-circle spa-bg-purple'></div>
                                            <span className='xui-font-sz-110 xui-font-w-500'>
                                                Erotic massage
                                            </span>
                                        </div>
                                    </div>
                                    <div className='testimony-box xui-mt-1 xui-bdr-rad-1'>
                                        <p className='xui-font-sz-180 bold-font xui-font-w-500 xui-line-height-1-half'>
                                            &#8358; 40,000
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='ca-testimonial-card xui-bdr-rad-1'>
                                    <div className='xui-d-flex xui-flex-ai-center xui-flex-jc-space-between'>
                                        <div className='xui-d-inline-flex xui-flex-ai-center xui-grid-gap-half'>
                                            <div className='profile xui-bdr-rad-circle spa-bg-purple'></div>
                                            <span className='xui-font-sz-110 xui-font-w-500'>
                                                Hot stone massage
                                            </span>
                                        </div>
                                    </div>
                                    <div className='testimony-box xui-mt-1 xui-bdr-rad-1'>
                                        <p className='xui-font-sz-180 bold-font xui-font-w-500 xui-line-height-1-half'>
                                            &#8358; 40,000
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='ca-testimonial-card xui-bdr-rad-1'>
                                    <div className='xui-d-flex xui-flex-ai-center xui-flex-jc-space-between'>
                                        <div className='xui-d-inline-flex xui-flex-ai-center xui-grid-gap-half'>
                                            <div className='profile xui-bdr-rad-circle spa-bg-purple'></div>
                                            <span className='xui-font-sz-110 xui-font-w-500'>
                                                Percussion therapy
                                            </span>
                                        </div>
                                    </div>
                                    <div className='testimony-box xui-mt-1 xui-bdr-rad-1'>
                                        <p className='xui-font-sz-180 bold-font xui-font-w-500 xui-line-height-1-half'>
                                            &#8358; 35,000
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='ca-testimonial-card xui-bdr-rad-1'>
                                    <div className='xui-d-flex xui-flex-ai-center xui-flex-jc-space-between'>
                                        <div className='xui-d-inline-flex xui-flex-ai-center xui-grid-gap-half'>
                                            <div className='profile xui-bdr-rad-circle spa-bg-purple'></div>
                                            <span className='xui-font-sz-110 xui-font-w-500'>
                                                Thai massage
                                            </span>
                                        </div>
                                    </div>
                                    <div className='testimony-box xui-mt-1 xui-bdr-rad-1'>
                                        <p className='xui-font-sz-180 bold-font xui-font-w-500 xui-line-height-1-half'>
                                            &#8358; 35,000
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='ca-testimonial-card xui-bdr-rad-1'>
                                    <div className='xui-d-flex xui-flex-ai-center xui-flex-jc-space-between'>
                                        <div className='xui-d-inline-flex xui-flex-ai-center xui-grid-gap-half'>
                                            <div className='profile xui-bdr-rad-circle spa-bg-purple'></div>
                                            <span className='xui-font-sz-110 xui-font-w-500'>
                                                Pre natal massage
                                            </span>
                                        </div>
                                    </div>
                                    <div className='testimony-box xui-mt-1 xui-bdr-rad-1'>
                                        <p className='xui-font-sz-180 bold-font xui-font-w-500 xui-line-height-1-half'>
                                            &#8358; 20,000
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='ca-testimonial-card xui-bdr-rad-1'>
                                    <div className='xui-d-flex xui-flex-ai-center xui-flex-jc-space-between'>
                                        <div className='xui-d-inline-flex xui-flex-ai-center xui-grid-gap-half'>
                                            <div className='profile xui-bdr-rad-circle spa-bg-purple'></div>
                                            <span className='xui-font-sz-110 xui-font-w-500'>
                                                Post natal massage
                                            </span>
                                        </div>
                                    </div>
                                    <div className='testimony-box xui-mt-1 xui-bdr-rad-1'>
                                        <p className='xui-font-sz-180 bold-font xui-font-w-500 xui-line-height-1-half'>
                                            &#8358; 20,000
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* Add more SwiperSlide components as needed */}
                        </Swiper>
                    </div>
                </div>
            </section>
            <Facials />
            <Pedicure />
        </>
    );
}
