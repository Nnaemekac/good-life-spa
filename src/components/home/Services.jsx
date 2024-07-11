import LinkButton from "../LinkButton";
import SectionDuplicate from "../SectionDuplicate";

export default function Services(){
    return(
        <>
            <section className="xui-pt-5 xui-pb-2">
                <div className="xui-d-flex xui-flex-ai-center xui-lg-flex-dir-row xui-flex-dir-column-reverse xui-container">
                    <div className="xui-lg-col-7 xui-col-12">
                        <div className="xui-d-grid xui-lg-grid-col-2 xui-grid-col-1 xui-grid-gap-1 xui-flex-ai-flex-start">
                            <div>
                                <div className="animate grid-card">
                                    <span className="xui-w-50 xui-h-50 xui-bdr-rad-circle spa-bg-purple xui-d-flex xui-flex-ai-center xui-flex-jc-center">
                                        <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.66667 36.6666L13.3333 33.3333V28.3333H33.3333M18.3333 33.3333H33.3333M13.3333 23.3333L18.3333 20L20 13.3333C25 15 25 20 25 23.3333M5 28.3333C5 28.7753 5.17559 29.1992 5.48816 29.5118C5.80072 29.8244 6.22464 30 6.66667 30C7.10869 30 7.53262 29.8244 7.84518 29.5118C8.15774 29.1992 8.33333 28.7753 8.33333 28.3333C8.33333 27.8913 8.15774 27.4673 7.84518 27.1548C7.53262 26.8422 7.10869 26.6666 6.66667 26.6666C6.22464 26.6666 5.80072 26.8422 5.48816 27.1548C5.17559 27.4673 5 27.8913 5 28.3333ZM13.3333 8.33329C13.3333 8.77532 13.5089 9.19924 13.8215 9.5118C14.1341 9.82436 14.558 9.99996 15 9.99996C15.442 9.99996 15.866 9.82436 16.1785 9.5118C16.4911 9.19924 16.6667 8.77532 16.6667 8.33329C16.6667 7.89127 16.4911 7.46734 16.1785 7.15478C15.866 6.84222 15.442 6.66663 15 6.66663C14.558 6.66663 14.1341 6.84222 13.8215 7.15478C13.5089 7.46734 13.3333 7.89127 13.3333 8.33329Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </span>
                                    <h3 className="xui-font-w-500 xui-font-sz-120 xui-mt-half">Massage Therapy</h3>
                                    <p className='xui-opacity-8 xui-w-fluid-100 xui-line-height-1-half xui-font-sz-85 xui-mt-half'>Relieve stress and tension with our variety of therapeutic massages, tailored to soothe your muscles and enhance your well-being. Our skilled therapists use a blend of techniques to address your specific needs, promoting deep relaxation.</p>
                                </div>
                                <div className="animate grid-card xui-mt-1">
                                    <span className="xui-w-50 xui-h-50 xui-bdr-rad-circle spa-bg-purple xui-d-flex xui-flex-ai-center xui-flex-jc-center">
                                        <svg width="30" height="30" viewBox="0 0 34 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17 8.75C19.4162 8.75 21.375 6.79125 21.375 4.375C21.375 1.95875 19.4162 0 17 0C14.5838 0 12.625 1.95875 12.625 4.375C12.625 6.79125 14.5838 8.75 17 8.75Z" fill="white"/>
                                            <path d="M31.1406 10H2.85938C2.29993 10 1.76341 10.2223 1.36782 10.6178C0.972237 11.0134 0.75 11.55 0.75 12.1094C0.75 12.6688 0.972237 13.2054 1.36782 13.601C1.76341 13.9965 2.29993 14.2188 2.85938 14.2188H10.8188C11.3586 14.2188 11.9906 14.4602 12.3484 15.3906C12.7664 16.4711 12.5617 18.5578 12.3039 20.1742L11.9664 22.0844C11.967 22.0894 11.9665 22.0944 11.9649 22.0992C11.9633 22.1039 11.9606 22.1082 11.957 22.1117L9.25391 37.4875C9.15588 38.0457 9.28291 38.6199 9.60721 39.0846C9.93151 39.5493 10.4267 39.8667 10.9844 39.9672C11.2601 40.016 11.5428 40.0095 11.8159 39.9481C12.0891 39.8867 12.3474 39.7717 12.5758 39.6097C12.8042 39.4477 12.9981 39.2419 13.1463 39.0044C13.2945 38.7668 13.394 38.5022 13.4391 38.2258L15.307 27.5383C15.307 27.5383 15.9062 25 17 25C18.1117 25 18.6984 27.5383 18.6984 27.5383L20.5664 38.2352C20.6116 38.514 20.7118 38.781 20.8612 39.0206C21.0107 39.2603 21.2063 39.4678 21.4367 39.6311C21.6671 39.7944 21.9278 39.9102 22.2034 39.9717C22.479 40.0332 22.7642 40.0393 23.0422 39.9895C23.3202 39.9397 23.5855 39.8351 23.8226 39.6818C24.0598 39.5284 24.2641 39.3294 24.4235 39.0963C24.583 38.8632 24.6945 38.6007 24.7515 38.3241C24.8085 38.0475 24.8098 37.7623 24.7555 37.4852L22.0516 22.1094C22.0521 22.1045 22.0517 22.0995 22.0502 22.0948C22.0487 22.0901 22.0462 22.0858 22.043 22.0821L21.7047 20.1719C21.4469 18.5555 21.2422 16.4688 21.6602 15.3883C22.0164 14.4602 22.6687 14.2164 23.1664 14.2164H31.1406C31.7001 14.2164 32.2366 13.9942 32.6322 13.5986C33.0278 13.203 33.25 12.6665 33.25 12.1071C33.25 11.5476 33.0278 11.0111 32.6322 10.6155C32.2366 10.2199 31.7001 9.99768 31.1406 9.99768V10Z" fill="white"/>
                                        </svg>
                                    </span>
                                    <h3 className="xui-font-w-500 xui-font-sz-120 xui-mt-half">Facial Treatments</h3>
                                    <p className='xui-opacity-8 xui-w-fluid-100 xui-line-height-1-half xui-font-sz-85 xui-mt-half'>Revitalize your skin with our bespoke facial treatments, using premium products to cleanse, hydrate, and rejuvenate your complexion. Our expert estheticians customize each facial to your skin type and concerns, ensuring optimal results.</p>
                                </div>
                            </div>
                            <div className="xui-lg-pt-2 xui-pt-none">
                                <div className="animate grid-card">
                                    <span className="xui-w-50 xui-h-50 xui-bdr-rad-circle spa-bg-purple xui-d-flex xui-flex-ai-center xui-flex-jc-center">
                                        <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.6578 7.99684L11.6576 7.99704C9.97628 9.69004 8.87915 11.9542 8.30839 14.5519L8.09486 15.5238L7.11647 15.705C7.06611 15.7143 7.0153 15.7257 6.96232 15.7396C6.11297 15.9685 5.48388 16.6564 5.14612 17.5624C4.81143 18.4669 4.76182 19.5939 5.06706 20.7345L11.6578 7.99684ZM11.6578 7.99684C13.6272 6.01315 16.3879 4.83337 20 4.83337C23.6128 4.83337 26.371 6.01422 28.3428 7.99749C30.0236 9.68846 31.1208 11.9539 31.6917 14.5505L31.906 15.5256M11.6578 7.99684L31.906 15.5256M31.906 15.5256L32.8883 15.7042M31.906 15.5256L32.8883 15.7042M32.8883 15.7042C32.9287 15.7115 32.9756 15.7223 33.0285 15.737L33.0358 15.739M32.8883 15.7042L33.0358 15.739M33.0358 15.739L33.0431 15.7409M33.0358 15.739L33.0431 15.7409M33.0431 15.7409C33.8924 15.9677 34.5222 16.655 34.8605 17.5638M33.0431 15.7409L34.8605 17.5638M31.288 24.2965L32.0148 24.1114C33.3677 23.7669 34.4946 22.395 34.9394 20.7354L31.288 24.2965ZM31.288 24.2965L31 24.9891M31.288 24.2965L31 24.9891M31 24.9891C28.9109 30.0126 24.377 33.5 20 33.5C15.6217 33.5 11.0877 30.0096 9.0001 24.9876L8.71283 24.2965M31 24.9891L8.71283 24.2965M8.71283 24.2965L7.98793 24.1105M8.71283 24.2965L7.98793 24.1105M7.98793 24.1105C6.63673 23.7636 5.5123 22.3923 5.06729 20.7354L7.98793 24.1105ZM34.8605 17.5638C35.1951 18.4664 35.245 19.5937 34.9395 20.7351L34.8605 17.5638Z" stroke="white" stroke-width="3"/>
                                        </svg>
                                    </span>
                                    <h3 className="xui-font-w-500 xui-font-sz-120 xui-mt-half">Body Treatments</h3>
                                    <p className='xui-opacity-8 xui-w-fluid-100 xui-line-height-1-half xui-font-sz-85 xui-mt-half'>Indulge in our luxurious body treatments, including scrubs and wraps, designed to detoxify, exfoliate, and nourish your skin. Our treatments use natural ingredients to remove impurities and dead skin cells, leaving your skin smooth and revitalized.</p>
                                </div>
                                <div className="animate grid-card xui-mt-1">
                                    <span className="xui-w-50 xui-h-50 xui-bdr-rad-circle spa-bg-purple xui-d-flex xui-flex-ai-center xui-flex-jc-center">
                                        <svg width="30" height="30" viewBox="0 0 34 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17 8.75C19.4162 8.75 21.375 6.79125 21.375 4.375C21.375 1.95875 19.4162 0 17 0C14.5838 0 12.625 1.95875 12.625 4.375C12.625 6.79125 14.5838 8.75 17 8.75Z" fill="white"/>
                                            <path d="M31.1406 10H2.85938C2.29993 10 1.76341 10.2223 1.36782 10.6178C0.972237 11.0134 0.75 11.55 0.75 12.1094C0.75 12.6688 0.972237 13.2054 1.36782 13.601C1.76341 13.9965 2.29993 14.2188 2.85938 14.2188H10.8188C11.3586 14.2188 11.9906 14.4602 12.3484 15.3906C12.7664 16.4711 12.5617 18.5578 12.3039 20.1742L11.9664 22.0844C11.967 22.0894 11.9665 22.0944 11.9649 22.0992C11.9633 22.1039 11.9606 22.1082 11.957 22.1117L9.25391 37.4875C9.15588 38.0457 9.28291 38.6199 9.60721 39.0846C9.93151 39.5493 10.4267 39.8667 10.9844 39.9672C11.2601 40.016 11.5428 40.0095 11.8159 39.9481C12.0891 39.8867 12.3474 39.7717 12.5758 39.6097C12.8042 39.4477 12.9981 39.2419 13.1463 39.0044C13.2945 38.7668 13.394 38.5022 13.4391 38.2258L15.307 27.5383C15.307 27.5383 15.9062 25 17 25C18.1117 25 18.6984 27.5383 18.6984 27.5383L20.5664 38.2352C20.6116 38.514 20.7118 38.781 20.8612 39.0206C21.0107 39.2603 21.2063 39.4678 21.4367 39.6311C21.6671 39.7944 21.9278 39.9102 22.2034 39.9717C22.479 40.0332 22.7642 40.0393 23.0422 39.9895C23.3202 39.9397 23.5855 39.8351 23.8226 39.6818C24.0598 39.5284 24.2641 39.3294 24.4235 39.0963C24.583 38.8632 24.6945 38.6007 24.7515 38.3241C24.8085 38.0475 24.8098 37.7623 24.7555 37.4852L22.0516 22.1094C22.0521 22.1045 22.0517 22.0995 22.0502 22.0948C22.0487 22.0901 22.0462 22.0858 22.043 22.0821L21.7047 20.1719C21.4469 18.5555 21.2422 16.4688 21.6602 15.3883C22.0164 14.4602 22.6687 14.2164 23.1664 14.2164H31.1406C31.7001 14.2164 32.2366 13.9942 32.6322 13.5986C33.0278 13.203 33.25 12.6665 33.25 12.1071C33.25 11.5476 33.0278 11.0111 32.6322 10.6155C32.2366 10.2199 31.7001 9.99768 31.1406 9.99768V10Z" fill="white"/>
                                        </svg>
                                    </span>
                                    <h3 className="xui-font-w-500 xui-font-sz-120 xui-mt-half">Wellness Packages</h3>
                                    <p className='xui-opacity-8 xui-w-fluid-100 xui-line-height-1-half xui-font-sz-85 xui-mt-half'>Experience holistic wellness with our curated packages, combining multiple treatments for a comprehensive spa journey. Each package is thoughtfully designed to provide a balanced blend of relaxation catering to your unique needs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xui-lg-col-5 xui-col-12 xui-lg-pl-3 xui-pl-none xui-lg-mb-none xui-mb-1-half">
                        <SectionDuplicate paragraphHeading="Our Services" mainHeading="Our Best Services" mainParagraph="Experience professional spa expertise to enhance your well-being and achieve the ultimate relaxation you deserve. Let our skilled therapists guide you through a journey of rejuvenation and tranquility">
                            <LinkButton text="Book Now" route="/" customClass="xui-btn xui-bdr-rad-1-half xui-mt-1" />
                        </SectionDuplicate>
                    </div>
                </div>
            </section>
          
    
        </>
    )
}