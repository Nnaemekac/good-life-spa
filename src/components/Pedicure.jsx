
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useEffect, useState } from 'react';

export default function Pedicure() {
    const [viewMore, setViewMore] = useState(false);
    return (
        <>
            <section className='xui-px-none xui-lg-py-1'>
                <div className='xui-text-black xui-bdr-rad-2 xui-mt-1 xui-px-1 xui-lg-px-none xui-py-2 xui-lg-py-2'>
                    <h2 className='xui-font-sz-150 xui-lg-font-sz-200 bold-font xui-font-w-500 xui-lg-w-fluid-70 xui-lg-px-4'>
                        Pedicure
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
                                                Regular pedicure
                                            </span>
                                        </div>
                                    </div>
                                    <div className='testimony-box xui-mt-1 xui-bdr-rad-1'>
                                        <p className='xui-font-sz-180 bold-font xui-font-w-500 xui-line-height-1-half'>
                                            &#8358; 7,000
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
                                                Jelly pedicure
                                            </span>
                                        </div>
                                    </div>
                                    <div className='testimony-box xui-mt-1 xui-bdr-rad-1'>
                                        <p className='xui-font-sz-180 bold-font xui-font-w-500 xui-line-height-1-half'>
                                            &#8358; 12,000
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
                                                Regular-pedicure/ massage gun
                                            </span>
                                        </div>
                                    </div>
                                    <div className='testimony-box xui-mt-1 xui-bdr-rad-1'>
                                        <p className='xui-font-sz-180 bold-font xui-font-w-500 xui-line-height-1-half'>
                                            &#8358; 10,000
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
                                                Jelly pedicure / massage gun
                                            </span>
                                        </div>
                                    </div>
                                    <div className='testimony-box xui-mt-1 xui-bdr-rad-1'>
                                        <p className='xui-font-sz-180 bold-font xui-font-w-500 xui-line-height-1-half'>
                                            &#8358; 15,000
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
                                                Jelly pedicure/ Hotstone
                                            </span>
                                        </div>
                                    </div>
                                    <div className='testimony-box xui-mt-1 xui-bdr-rad-1'>
                                        <p className='xui-font-sz-180 bold-font xui-font-w-500 xui-line-height-1-half'>
                                            &#8358; 15,000
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                {viewMore && (
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
                                            Skin tag removal
                                        </span>
                                    </div>
                                </div>
                                <div className='testimony-box xui-mt-1 xui-bdr-rad-1'>
                                    <p className='xui-font-sz-180 bold-font xui-font-w-500 xui-line-height-1-half'>
                                        &#8358; 50,000
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
                                            Full body waxing
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
                                            Virginal and under arm waxing
                                        </span>
                                    </div>
                                </div>
                                <div className='testimony-box xui-mt-1 xui-bdr-rad-1'>
                                    <p className='xui-font-sz-180 bold-font xui-font-w-500 xui-line-height-1-half'>
                                        &#8358; 30,000
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
                                            Body polishing and sauna bath
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
                                            Teeth whitening
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
                                            Scaling and polishing
                                        </span>
                                    </div>
                                </div>
                                <div className='testimony-box xui-mt-1 xui-bdr-rad-1'>
                                    <p className='xui-font-sz-180 bold-font xui-font-w-500 xui-line-height-1-half'>
                                        &#8358; 30,000
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                )}
                <div className='xui-d-flex xui-flex-jc-center'>
                    <button className='spa-bg-purple xui-text-white xui-font-sz-85 xui-btn xui-bdr-rad-1-half' onClick={() => setViewMore(!viewMore)}>
                        {viewMore ? 'View Less' : 'View More'}
                    </button>
                </div>
            </section>
            {/* <Facials /> */}
        </>
    );
}
