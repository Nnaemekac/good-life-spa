


// Import Swiper styles
import { useEffect, useState } from 'react';
import SectionDuplicate from '../SectionDuplicate';
import { Link } from 'react-router-dom';
import Service from '../Service';

export default function Services() {
    const [massageViewMore, setMassageViewMore] = useState(false);
    const [pedicureViewMore, setPedicureViewMore] = useState(false);
    const [skincareViewMore, setSkincareViewMore] = useState(false);
    const [facialsViewMore, setFacialsViewMore] = useState(false);
    return (
        <>
            <section className='xui-py-3 xui-container'>
                <SectionDuplicate customClass="xui-text-center" isAutoMargin={true} paragraphHeading="Our Services" mainHeading="Our Best Services" mainParagraph="Experience professional spa expertise to enhance your well-being and achieve the ultimate relaxation you deserve. Let our skilled therapists guide you through a journey of rejuvenation and tranquility.">
                    {/* <LinkButton text="Learn More" route="/" customClass="xui-btn xui-bdr-rad-1-half xui-mt-1" /> */}
                </SectionDuplicate>
                <div className='xui-text-black xui-bdr-rad-2 xui-py-2 xui-lg-py-2'>
                    <div className='xui-d-flex xui-flex-ai-center xui-flex-jc-space-between'>
                        <h2 className='xui-font-sz-150 xui-lg-font-sz-200 bold-font xui-font-w-500'>Massage</h2>
                        <p className='xui-font-sz-85 xui-cursor-pointer' onClick={() => setMassageViewMore(!massageViewMore)}>{massageViewMore ? 'View Less' : 'View More'}</p>
                    </div>
                    <div className='xui-mt-2 xui-d-grid xui-lg-grid-col-3 xui-grid-col-1 xui-grid-gap-1'>
                        <Service
                         icon={
                         <>
                            <svg width="35" height="35" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.73006 42.5605L15.328 38.7615V33.063H38.122M21.0265 38.7615H38.122M15.328 27.3646L21.0265 23.5656L22.926 15.9676C28.6245 17.8671 28.6245 23.5656 28.6245 27.3646M5.83057 33.063C5.83057 33.5668 6.03069 34.05 6.38691 34.4062C6.74314 34.7624 7.22628 34.9625 7.73006 34.9625C8.23384 34.9625 8.71698 34.7624 9.0732 34.4062C9.42943 34.05 9.62955 33.5668 9.62955 33.063C9.62955 32.5593 9.42943 32.0761 9.0732 31.7199C8.71698 31.3637 8.23384 31.1635 7.73006 31.1635C7.22628 31.1635 6.74314 31.3637 6.38691 31.7199C6.03069 32.0761 5.83057 32.5593 5.83057 33.063ZM15.328 10.2691C15.328 10.7729 15.5282 11.256 15.8844 11.6123C16.2406 11.9685 16.7237 12.1686 17.2275 12.1686C17.7313 12.1686 18.2144 11.9685 18.5707 11.6123C18.9269 11.256 19.127 10.7729 19.127 10.2691C19.127 9.76535 18.9269 9.2822 18.5707 8.92598C18.2144 8.56975 17.7313 8.36963 17.2275 8.36963C16.7237 8.36963 16.2406 8.56975 15.8844 8.92598C15.5282 9.2822 15.328 9.76535 15.328 10.2691Z" stroke="white" stroke-width="2.27939" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                         </>}
                         serviceName="Deep tissue massage"
                         serviceDesc="Relieve stress and tension with our variety of therapeutic massages, tailored to soothe your muscles and enhance your well-being."
                         servicePrice="25,000"
                         />
                        <Service
                         icon={
                         <>
                            <svg width="35" height="35" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.73006 42.5605L15.328 38.7615V33.063H38.122M21.0265 38.7615H38.122M15.328 27.3646L21.0265 23.5656L22.926 15.9676C28.6245 17.8671 28.6245 23.5656 28.6245 27.3646M5.83057 33.063C5.83057 33.5668 6.03069 34.05 6.38691 34.4062C6.74314 34.7624 7.22628 34.9625 7.73006 34.9625C8.23384 34.9625 8.71698 34.7624 9.0732 34.4062C9.42943 34.05 9.62955 33.5668 9.62955 33.063C9.62955 32.5593 9.42943 32.0761 9.0732 31.7199C8.71698 31.3637 8.23384 31.1635 7.73006 31.1635C7.22628 31.1635 6.74314 31.3637 6.38691 31.7199C6.03069 32.0761 5.83057 32.5593 5.83057 33.063ZM15.328 10.2691C15.328 10.7729 15.5282 11.256 15.8844 11.6123C16.2406 11.9685 16.7237 12.1686 17.2275 12.1686C17.7313 12.1686 18.2144 11.9685 18.5707 11.6123C18.9269 11.256 19.127 10.7729 19.127 10.2691C19.127 9.76535 18.9269 9.2822 18.5707 8.92598C18.2144 8.56975 17.7313 8.36963 17.2275 8.36963C16.7237 8.36963 16.2406 8.56975 15.8844 8.92598C15.5282 9.2822 15.328 9.76535 15.328 10.2691Z" stroke="white" stroke-width="2.27939" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                         </>}
                         serviceName="Swedish massage"
                         serviceDesc="Relieve stress and tension with our variety of therapeutic massages, tailored to soothe your muscles and enhance your well-being."
                         servicePrice="20,000"
                         />
                        <Service
                         icon={
                         <>
                            <svg width="35" height="35" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.73006 42.5605L15.328 38.7615V33.063H38.122M21.0265 38.7615H38.122M15.328 27.3646L21.0265 23.5656L22.926 15.9676C28.6245 17.8671 28.6245 23.5656 28.6245 27.3646M5.83057 33.063C5.83057 33.5668 6.03069 34.05 6.38691 34.4062C6.74314 34.7624 7.22628 34.9625 7.73006 34.9625C8.23384 34.9625 8.71698 34.7624 9.0732 34.4062C9.42943 34.05 9.62955 33.5668 9.62955 33.063C9.62955 32.5593 9.42943 32.0761 9.0732 31.7199C8.71698 31.3637 8.23384 31.1635 7.73006 31.1635C7.22628 31.1635 6.74314 31.3637 6.38691 31.7199C6.03069 32.0761 5.83057 32.5593 5.83057 33.063ZM15.328 10.2691C15.328 10.7729 15.5282 11.256 15.8844 11.6123C16.2406 11.9685 16.7237 12.1686 17.2275 12.1686C17.7313 12.1686 18.2144 11.9685 18.5707 11.6123C18.9269 11.256 19.127 10.7729 19.127 10.2691C19.127 9.76535 18.9269 9.2822 18.5707 8.92598C18.2144 8.56975 17.7313 8.36963 17.2275 8.36963C16.7237 8.36963 16.2406 8.56975 15.8844 8.92598C15.5282 9.2822 15.328 9.76535 15.328 10.2691Z" stroke="white" stroke-width="2.27939" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                         </>}
                         serviceName="Nuru massage"
                         serviceDesc="Relieve stress and tension with our variety of therapeutic massages, tailored to soothe your muscles and enhance your well-being."
                         servicePrice="45,000"
                         />
                        
                    </div>
                    {massageViewMore && (
                        <div className='xui-mt-2 xui-d-grid xui-lg-grid-col-3 xui-grid-col-1 xui-grid-gap-1'>
                        <Service
                         icon={
                         <>
                            <svg width="35" height="35" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.73006 42.5605L15.328 38.7615V33.063H38.122M21.0265 38.7615H38.122M15.328 27.3646L21.0265 23.5656L22.926 15.9676C28.6245 17.8671 28.6245 23.5656 28.6245 27.3646M5.83057 33.063C5.83057 33.5668 6.03069 34.05 6.38691 34.4062C6.74314 34.7624 7.22628 34.9625 7.73006 34.9625C8.23384 34.9625 8.71698 34.7624 9.0732 34.4062C9.42943 34.05 9.62955 33.5668 9.62955 33.063C9.62955 32.5593 9.42943 32.0761 9.0732 31.7199C8.71698 31.3637 8.23384 31.1635 7.73006 31.1635C7.22628 31.1635 6.74314 31.3637 6.38691 31.7199C6.03069 32.0761 5.83057 32.5593 5.83057 33.063ZM15.328 10.2691C15.328 10.7729 15.5282 11.256 15.8844 11.6123C16.2406 11.9685 16.7237 12.1686 17.2275 12.1686C17.7313 12.1686 18.2144 11.9685 18.5707 11.6123C18.9269 11.256 19.127 10.7729 19.127 10.2691C19.127 9.76535 18.9269 9.2822 18.5707 8.92598C18.2144 8.56975 17.7313 8.36963 17.2275 8.36963C16.7237 8.36963 16.2406 8.56975 15.8844 8.92598C15.5282 9.2822 15.328 9.76535 15.328 10.2691Z" stroke="white" stroke-width="2.27939" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                         </>}
                         serviceName="Erotic massage"
                         serviceDesc="Relieve stress and tension with our variety of therapeutic massages, tailored to soothe your muscles and enhance your well-being."
                         servicePrice="40,000"
                         />
                        <Service
                         icon={
                         <>
                            <svg width="35" height="35" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.73006 42.5605L15.328 38.7615V33.063H38.122M21.0265 38.7615H38.122M15.328 27.3646L21.0265 23.5656L22.926 15.9676C28.6245 17.8671 28.6245 23.5656 28.6245 27.3646M5.83057 33.063C5.83057 33.5668 6.03069 34.05 6.38691 34.4062C6.74314 34.7624 7.22628 34.9625 7.73006 34.9625C8.23384 34.9625 8.71698 34.7624 9.0732 34.4062C9.42943 34.05 9.62955 33.5668 9.62955 33.063C9.62955 32.5593 9.42943 32.0761 9.0732 31.7199C8.71698 31.3637 8.23384 31.1635 7.73006 31.1635C7.22628 31.1635 6.74314 31.3637 6.38691 31.7199C6.03069 32.0761 5.83057 32.5593 5.83057 33.063ZM15.328 10.2691C15.328 10.7729 15.5282 11.256 15.8844 11.6123C16.2406 11.9685 16.7237 12.1686 17.2275 12.1686C17.7313 12.1686 18.2144 11.9685 18.5707 11.6123C18.9269 11.256 19.127 10.7729 19.127 10.2691C19.127 9.76535 18.9269 9.2822 18.5707 8.92598C18.2144 8.56975 17.7313 8.36963 17.2275 8.36963C16.7237 8.36963 16.2406 8.56975 15.8844 8.92598C15.5282 9.2822 15.328 9.76535 15.328 10.2691Z" stroke="white" stroke-width="2.27939" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                         </>}
                         serviceName="Hot stone massage"
                         serviceDesc="Relieve stress and tension with our variety of therapeutic massages, tailored to soothe your muscles and enhance your well-being."
                         servicePrice="40,000"
                         />
                        <Service
                         icon={
                         <>
                            <svg width="35" height="35" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.73006 42.5605L15.328 38.7615V33.063H38.122M21.0265 38.7615H38.122M15.328 27.3646L21.0265 23.5656L22.926 15.9676C28.6245 17.8671 28.6245 23.5656 28.6245 27.3646M5.83057 33.063C5.83057 33.5668 6.03069 34.05 6.38691 34.4062C6.74314 34.7624 7.22628 34.9625 7.73006 34.9625C8.23384 34.9625 8.71698 34.7624 9.0732 34.4062C9.42943 34.05 9.62955 33.5668 9.62955 33.063C9.62955 32.5593 9.42943 32.0761 9.0732 31.7199C8.71698 31.3637 8.23384 31.1635 7.73006 31.1635C7.22628 31.1635 6.74314 31.3637 6.38691 31.7199C6.03069 32.0761 5.83057 32.5593 5.83057 33.063ZM15.328 10.2691C15.328 10.7729 15.5282 11.256 15.8844 11.6123C16.2406 11.9685 16.7237 12.1686 17.2275 12.1686C17.7313 12.1686 18.2144 11.9685 18.5707 11.6123C18.9269 11.256 19.127 10.7729 19.127 10.2691C19.127 9.76535 18.9269 9.2822 18.5707 8.92598C18.2144 8.56975 17.7313 8.36963 17.2275 8.36963C16.7237 8.36963 16.2406 8.56975 15.8844 8.92598C15.5282 9.2822 15.328 9.76535 15.328 10.2691Z" stroke="white" stroke-width="2.27939" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                         </>}
                         serviceName="Percussion therapy"
                         serviceDesc="Relieve stress and tension with our variety of therapeutic massages, tailored to soothe your muscles and enhance your well-being."
                         servicePrice="35,000"
                         />
                        <Service
                         icon={
                         <>
                            <svg width="35" height="35" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.73006 42.5605L15.328 38.7615V33.063H38.122M21.0265 38.7615H38.122M15.328 27.3646L21.0265 23.5656L22.926 15.9676C28.6245 17.8671 28.6245 23.5656 28.6245 27.3646M5.83057 33.063C5.83057 33.5668 6.03069 34.05 6.38691 34.4062C6.74314 34.7624 7.22628 34.9625 7.73006 34.9625C8.23384 34.9625 8.71698 34.7624 9.0732 34.4062C9.42943 34.05 9.62955 33.5668 9.62955 33.063C9.62955 32.5593 9.42943 32.0761 9.0732 31.7199C8.71698 31.3637 8.23384 31.1635 7.73006 31.1635C7.22628 31.1635 6.74314 31.3637 6.38691 31.7199C6.03069 32.0761 5.83057 32.5593 5.83057 33.063ZM15.328 10.2691C15.328 10.7729 15.5282 11.256 15.8844 11.6123C16.2406 11.9685 16.7237 12.1686 17.2275 12.1686C17.7313 12.1686 18.2144 11.9685 18.5707 11.6123C18.9269 11.256 19.127 10.7729 19.127 10.2691C19.127 9.76535 18.9269 9.2822 18.5707 8.92598C18.2144 8.56975 17.7313 8.36963 17.2275 8.36963C16.7237 8.36963 16.2406 8.56975 15.8844 8.92598C15.5282 9.2822 15.328 9.76535 15.328 10.2691Z" stroke="white" stroke-width="2.27939" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                         </>}
                         serviceName="Thai massage"
                         serviceDesc="Relieve stress and tension with our variety of therapeutic massages, tailored to soothe your muscles and enhance your well-being."
                         servicePrice="35,000"
                         />
                        <Service
                         icon={
                         <>
                            <svg width="35" height="35" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.73006 42.5605L15.328 38.7615V33.063H38.122M21.0265 38.7615H38.122M15.328 27.3646L21.0265 23.5656L22.926 15.9676C28.6245 17.8671 28.6245 23.5656 28.6245 27.3646M5.83057 33.063C5.83057 33.5668 6.03069 34.05 6.38691 34.4062C6.74314 34.7624 7.22628 34.9625 7.73006 34.9625C8.23384 34.9625 8.71698 34.7624 9.0732 34.4062C9.42943 34.05 9.62955 33.5668 9.62955 33.063C9.62955 32.5593 9.42943 32.0761 9.0732 31.7199C8.71698 31.3637 8.23384 31.1635 7.73006 31.1635C7.22628 31.1635 6.74314 31.3637 6.38691 31.7199C6.03069 32.0761 5.83057 32.5593 5.83057 33.063ZM15.328 10.2691C15.328 10.7729 15.5282 11.256 15.8844 11.6123C16.2406 11.9685 16.7237 12.1686 17.2275 12.1686C17.7313 12.1686 18.2144 11.9685 18.5707 11.6123C18.9269 11.256 19.127 10.7729 19.127 10.2691C19.127 9.76535 18.9269 9.2822 18.5707 8.92598C18.2144 8.56975 17.7313 8.36963 17.2275 8.36963C16.7237 8.36963 16.2406 8.56975 15.8844 8.92598C15.5282 9.2822 15.328 9.76535 15.328 10.2691Z" stroke="white" stroke-width="2.27939" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                         </>}
                         serviceName="Pre natal massage"
                         serviceDesc="Relieve stress and tension with our variety of therapeutic massages, tailored to soothe your muscles and enhance your well-being."
                         servicePrice="20,000"
                         />
                        <Service
                         icon={
                         <>
                            <svg width="35" height="35" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.73006 42.5605L15.328 38.7615V33.063H38.122M21.0265 38.7615H38.122M15.328 27.3646L21.0265 23.5656L22.926 15.9676C28.6245 17.8671 28.6245 23.5656 28.6245 27.3646M5.83057 33.063C5.83057 33.5668 6.03069 34.05 6.38691 34.4062C6.74314 34.7624 7.22628 34.9625 7.73006 34.9625C8.23384 34.9625 8.71698 34.7624 9.0732 34.4062C9.42943 34.05 9.62955 33.5668 9.62955 33.063C9.62955 32.5593 9.42943 32.0761 9.0732 31.7199C8.71698 31.3637 8.23384 31.1635 7.73006 31.1635C7.22628 31.1635 6.74314 31.3637 6.38691 31.7199C6.03069 32.0761 5.83057 32.5593 5.83057 33.063ZM15.328 10.2691C15.328 10.7729 15.5282 11.256 15.8844 11.6123C16.2406 11.9685 16.7237 12.1686 17.2275 12.1686C17.7313 12.1686 18.2144 11.9685 18.5707 11.6123C18.9269 11.256 19.127 10.7729 19.127 10.2691C19.127 9.76535 18.9269 9.2822 18.5707 8.92598C18.2144 8.56975 17.7313 8.36963 17.2275 8.36963C16.7237 8.36963 16.2406 8.56975 15.8844 8.92598C15.5282 9.2822 15.328 9.76535 15.328 10.2691Z" stroke="white" stroke-width="2.27939" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                         </>}
                         serviceName="Post natal massage"
                         serviceDesc="Relieve stress and tension with our variety of therapeutic massages, tailored to soothe your muscles and enhance your well-being."
                         servicePrice="20,000"
                         />
                        
                    </div>
                    )}
                </div>
                <div className='xui-text-black xui-bdr-rad-2 xui-py-2 xui-lg-py-2'>
                    <div className='xui-d-flex xui-flex-ai-center xui-flex-jc-space-between'>
                        <h2 className='xui-font-sz-150 xui-lg-font-sz-200 bold-font xui-font-w-500'>Facials</h2>
                        <p className='xui-font-sz-85 xui-cursor-pointer' onClick={() => setFacialsViewMore(!facialsViewMore)}>{facialsViewMore ? 'View Less' : 'View More'}</p>
                    </div>
                    <div className='xui-mt-2 xui-d-grid xui-lg-grid-col-3 xui-grid-col-1 xui-grid-gap-1'>
                        <Service
                         icon={
                         <>
                            <svg width="35" height="35" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <g clip-path="url(#clip0_209_997)">
                           <path d="M13.81 9.45646L13.8097 9.4567C11.9086 11.371 10.665 13.9342 10.0173 16.8819L9.76086 18.0492L8.58569 18.2668C8.53082 18.277 8.4753 18.2894 8.4172 18.3047C7.48588 18.5557 6.78755 19.3119 6.4098 20.3251C6.03573 21.336 5.9788 22.6008 6.32228 23.8843L13.81 9.45646ZM13.81 9.45646C16.035 7.21516 19.1568 5.8784 23.2518 5.8784M13.81 9.45646L23.2518 5.8784M36.7439 18.0515L36.4864 16.8802C35.8387 13.9339 34.595 11.3693 32.6946 9.45739L36.7439 18.0515ZM36.7439 18.0515L37.9238 18.266M36.7439 18.0515L37.9238 18.266M37.9238 18.266C37.9667 18.2738 38.0173 18.2854 38.0754 18.3015L38.0841 18.3039M37.9238 18.266L38.0841 18.3039M38.0841 18.3039L38.0928 18.3063M38.0841 18.3039L38.0928 18.3063M38.0928 18.3063C39.0242 18.5549 39.7235 19.3108 40.1018 20.3277C40.4755 21.3363 40.5326 22.601 40.1888 23.8851C39.6871 25.7574 38.4203 27.2859 36.922 27.6675L36.049 27.8898M38.0928 18.3063L36.049 27.8898M36.049 27.8898L35.7031 28.7216M36.049 27.8898L35.7031 28.7216M35.7031 28.7216C33.3322 34.4225 28.193 38.3645 23.2518 38.3645C18.3091 38.3645 13.1698 34.4191 10.8007 28.7199L10.4557 27.8899M35.7031 28.7216L10.4557 27.8899M10.4557 27.8899L9.585 27.6664M10.4557 27.8899L9.585 27.6664M9.585 27.6664C8.08828 27.2822 6.82417 25.754 6.32231 23.8844L9.585 27.6664ZM23.2518 5.8784C27.3476 5.8784 30.4665 7.21633 32.6945 9.45724L23.2518 5.8784Z" stroke="white" stroke-width="3.60335"/>
                           </g>
                           <defs>
                           <clipPath id="clip0_209_997">
                           <rect width="45.5867" height="45.5867" fill="white" transform="translate(0.458496 0.277832)"/>
                           </clipPath>
                           </defs>
                           </svg>
                         </>}
                         serviceName="Regular facials"
                         serviceDesc="Revitalize your skin with our bespoke facial treatments, using premium products to cleanse, and rejuvenate your complexion."
                         servicePrice="20,000"
                         />
                        <Service
                         icon={
                         <>
                            <svg width="35" height="35" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <g clip-path="url(#clip0_209_997)">
                           <path d="M13.81 9.45646L13.8097 9.4567C11.9086 11.371 10.665 13.9342 10.0173 16.8819L9.76086 18.0492L8.58569 18.2668C8.53082 18.277 8.4753 18.2894 8.4172 18.3047C7.48588 18.5557 6.78755 19.3119 6.4098 20.3251C6.03573 21.336 5.9788 22.6008 6.32228 23.8843L13.81 9.45646ZM13.81 9.45646C16.035 7.21516 19.1568 5.8784 23.2518 5.8784M13.81 9.45646L23.2518 5.8784M36.7439 18.0515L36.4864 16.8802C35.8387 13.9339 34.595 11.3693 32.6946 9.45739L36.7439 18.0515ZM36.7439 18.0515L37.9238 18.266M36.7439 18.0515L37.9238 18.266M37.9238 18.266C37.9667 18.2738 38.0173 18.2854 38.0754 18.3015L38.0841 18.3039M37.9238 18.266L38.0841 18.3039M38.0841 18.3039L38.0928 18.3063M38.0841 18.3039L38.0928 18.3063M38.0928 18.3063C39.0242 18.5549 39.7235 19.3108 40.1018 20.3277C40.4755 21.3363 40.5326 22.601 40.1888 23.8851C39.6871 25.7574 38.4203 27.2859 36.922 27.6675L36.049 27.8898M38.0928 18.3063L36.049 27.8898M36.049 27.8898L35.7031 28.7216M36.049 27.8898L35.7031 28.7216M35.7031 28.7216C33.3322 34.4225 28.193 38.3645 23.2518 38.3645C18.3091 38.3645 13.1698 34.4191 10.8007 28.7199L10.4557 27.8899M35.7031 28.7216L10.4557 27.8899M10.4557 27.8899L9.585 27.6664M10.4557 27.8899L9.585 27.6664M9.585 27.6664C8.08828 27.2822 6.82417 25.754 6.32231 23.8844L9.585 27.6664ZM23.2518 5.8784C27.3476 5.8784 30.4665 7.21633 32.6945 9.45724L23.2518 5.8784Z" stroke="white" stroke-width="3.60335"/>
                           </g>
                           <defs>
                           <clipPath id="clip0_209_997">
                           <rect width="45.5867" height="45.5867" fill="white" transform="translate(0.458496 0.277832)"/>
                           </clipPath>
                           </defs>
                           </svg>
                         </>}
                         serviceName="Combo facials"
                         serviceDesc="Revitalize your skin with our bespoke facial treatments, using premium products to cleanse, and rejuvenate your complexion."
                         servicePrice="30,000"
                         />
                        <Service
                         icon={
                         <>
                            <svg width="35" height="35" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <g clip-path="url(#clip0_209_997)">
                           <path d="M13.81 9.45646L13.8097 9.4567C11.9086 11.371 10.665 13.9342 10.0173 16.8819L9.76086 18.0492L8.58569 18.2668C8.53082 18.277 8.4753 18.2894 8.4172 18.3047C7.48588 18.5557 6.78755 19.3119 6.4098 20.3251C6.03573 21.336 5.9788 22.6008 6.32228 23.8843L13.81 9.45646ZM13.81 9.45646C16.035 7.21516 19.1568 5.8784 23.2518 5.8784M13.81 9.45646L23.2518 5.8784M36.7439 18.0515L36.4864 16.8802C35.8387 13.9339 34.595 11.3693 32.6946 9.45739L36.7439 18.0515ZM36.7439 18.0515L37.9238 18.266M36.7439 18.0515L37.9238 18.266M37.9238 18.266C37.9667 18.2738 38.0173 18.2854 38.0754 18.3015L38.0841 18.3039M37.9238 18.266L38.0841 18.3039M38.0841 18.3039L38.0928 18.3063M38.0841 18.3039L38.0928 18.3063M38.0928 18.3063C39.0242 18.5549 39.7235 19.3108 40.1018 20.3277C40.4755 21.3363 40.5326 22.601 40.1888 23.8851C39.6871 25.7574 38.4203 27.2859 36.922 27.6675L36.049 27.8898M38.0928 18.3063L36.049 27.8898M36.049 27.8898L35.7031 28.7216M36.049 27.8898L35.7031 28.7216M35.7031 28.7216C33.3322 34.4225 28.193 38.3645 23.2518 38.3645C18.3091 38.3645 13.1698 34.4191 10.8007 28.7199L10.4557 27.8899M35.7031 28.7216L10.4557 27.8899M10.4557 27.8899L9.585 27.6664M10.4557 27.8899L9.585 27.6664M9.585 27.6664C8.08828 27.2822 6.82417 25.754 6.32231 23.8844L9.585 27.6664ZM23.2518 5.8784C27.3476 5.8784 30.4665 7.21633 32.6945 9.45724L23.2518 5.8784Z" stroke="white" stroke-width="3.60335"/>
                           </g>
                           <defs>
                           <clipPath id="clip0_209_997">
                           <rect width="45.5867" height="45.5867" fill="white" transform="translate(0.458496 0.277832)"/>
                           </clipPath>
                           </defs>
                           </svg>
                         </>}
                         serviceName="Derma planning + Hydro jelly facials"
                         serviceDesc="Revitalize your skin with our bespoke facial treatments, using premium products to cleanse, and rejuvenate your complexion."
                         servicePrice="35,000"
                         />
                        
                    </div>
                    {facialsViewMore && (
                        <div className='xui-mt-2 xui-d-flex xui-flex-jc-center xui-grid-gap-1'>
                        <div className='viewmore-pedicure-card'>
                        <Service
                         icon={
                         <>
                            <svg width="35" height="35" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <g clip-path="url(#clip0_209_997)">
                           <path d="M13.81 9.45646L13.8097 9.4567C11.9086 11.371 10.665 13.9342 10.0173 16.8819L9.76086 18.0492L8.58569 18.2668C8.53082 18.277 8.4753 18.2894 8.4172 18.3047C7.48588 18.5557 6.78755 19.3119 6.4098 20.3251C6.03573 21.336 5.9788 22.6008 6.32228 23.8843L13.81 9.45646ZM13.81 9.45646C16.035 7.21516 19.1568 5.8784 23.2518 5.8784M13.81 9.45646L23.2518 5.8784M36.7439 18.0515L36.4864 16.8802C35.8387 13.9339 34.595 11.3693 32.6946 9.45739L36.7439 18.0515ZM36.7439 18.0515L37.9238 18.266M36.7439 18.0515L37.9238 18.266M37.9238 18.266C37.9667 18.2738 38.0173 18.2854 38.0754 18.3015L38.0841 18.3039M37.9238 18.266L38.0841 18.3039M38.0841 18.3039L38.0928 18.3063M38.0841 18.3039L38.0928 18.3063M38.0928 18.3063C39.0242 18.5549 39.7235 19.3108 40.1018 20.3277C40.4755 21.3363 40.5326 22.601 40.1888 23.8851C39.6871 25.7574 38.4203 27.2859 36.922 27.6675L36.049 27.8898M38.0928 18.3063L36.049 27.8898M36.049 27.8898L35.7031 28.7216M36.049 27.8898L35.7031 28.7216M35.7031 28.7216C33.3322 34.4225 28.193 38.3645 23.2518 38.3645C18.3091 38.3645 13.1698 34.4191 10.8007 28.7199L10.4557 27.8899M35.7031 28.7216L10.4557 27.8899M10.4557 27.8899L9.585 27.6664M10.4557 27.8899L9.585 27.6664M9.585 27.6664C8.08828 27.2822 6.82417 25.754 6.32231 23.8844L9.585 27.6664ZM23.2518 5.8784C27.3476 5.8784 30.4665 7.21633 32.6945 9.45724L23.2518 5.8784Z" stroke="white" stroke-width="3.60335"/>
                           </g>
                           <defs>
                           <clipPath id="clip0_209_997">
                           <rect width="45.5867" height="45.5867" fill="white" transform="translate(0.458496 0.277832)"/>
                           </clipPath>
                           </defs>
                           </svg>
                         </>}
                         serviceName="Hydra facials"
                         serviceDesc="Revitalize your skin with our bespoke facial treatments, using premium products to cleanse, and rejuvenate your complexion."
                         servicePrice="30,000"
                         />
                        </div>
                        
                        
                    </div>
                    )}
                </div>
                <div className='xui-text-black xui-bdr-rad-2 xui-py-2 xui-lg-py-2'>
                    <div className='xui-d-flex xui-flex-ai-center xui-flex-jc-space-between'>
                        <h2 className='xui-font-sz-150 xui-lg-font-sz-200 bold-font xui-font-w-500'>Pedicure</h2>
                        <p className='xui-font-sz-85 xui-cursor-pointer' onClick={() => setPedicureViewMore(!pedicureViewMore)}>{pedicureViewMore ? 'View Less' : 'View More'}</p>
                    </div>
                    <div className='xui-mt-2 xui-d-grid xui-lg-grid-col-3 xui-grid-col-1 xui-grid-gap-1'>
                        <Service
                         icon={
                         <>
                            <svg width="435" height="35" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M41.8525 22.8407C41.8525 33.3321 33.3481 41.8366 22.8567 41.8366C12.3653 41.8366 3.86084 33.3321 3.86084 22.8407C3.86084 12.3493 12.3653 3.84491 22.8567 3.84491" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M36.1537 9.04218L36.4795 10.0452H37.5338L36.6809 10.6644L37.0066 11.6674L36.1537 11.0481L35.3008 11.6674L35.6266 10.6644L34.7737 10.0452H35.828L36.1537 9.04218Z" stroke="white" stroke-width="2"/>
                            <path d="M28.5555 18.0918C28.5555 14.9444 26.004 12.393 22.8567 12.393C19.7094 12.393 17.158 14.9444 17.158 18.0918V29.4893C17.158 32.6366 19.7094 35.188 22.8567 35.188C26.004 35.188 28.5555 32.6366 28.5555 29.4893V18.0918Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M17.1579 23.7905C15.2583 23.7905 12.4089 25.8022 12.4089 29.4893V38.782M28.5554 23.7905C30.455 23.7905 33.3044 25.8022 33.3044 29.4893V38.5123" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                         </>}
                         serviceName="Regular pedicure"
                         serviceDesc="Pamper your feet with our rejuvenating pedicure!, leave your feet soft, smooth, and beautifully polished."
                         servicePrice="7000"
                         />
                        <Service
                         icon={
                         <>
                            <svg width="35" height="35" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M41.8525 22.8407C41.8525 33.3321 33.3481 41.8366 22.8567 41.8366C12.3653 41.8366 3.86084 33.3321 3.86084 22.8407C3.86084 12.3493 12.3653 3.84491 22.8567 3.84491" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M36.1537 9.04218L36.4795 10.0452H37.5338L36.6809 10.6644L37.0066 11.6674L36.1537 11.0481L35.3008 11.6674L35.6266 10.6644L34.7737 10.0452H35.828L36.1537 9.04218Z" stroke="white" stroke-width="2"/>
                            <path d="M28.5555 18.0918C28.5555 14.9444 26.004 12.393 22.8567 12.393C19.7094 12.393 17.158 14.9444 17.158 18.0918V29.4893C17.158 32.6366 19.7094 35.188 22.8567 35.188C26.004 35.188 28.5555 32.6366 28.5555 29.4893V18.0918Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M17.1579 23.7905C15.2583 23.7905 12.4089 25.8022 12.4089 29.4893V38.782M28.5554 23.7905C30.455 23.7905 33.3044 25.8022 33.3044 29.4893V38.5123" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                         </>}
                         serviceName="Jelly pedicure"
                         serviceDesc="Pamper your feet with our rejuvenating pedicure!, leave your feet soft, smooth, and beautifully polished."
                         servicePrice="12,000"
                         />
                        <Service
                         icon={
                         <>
                            <svg width="35" height="35" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M41.8525 22.8407C41.8525 33.3321 33.3481 41.8366 22.8567 41.8366C12.3653 41.8366 3.86084 33.3321 3.86084 22.8407C3.86084 12.3493 12.3653 3.84491 22.8567 3.84491" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M36.1537 9.04218L36.4795 10.0452H37.5338L36.6809 10.6644L37.0066 11.6674L36.1537 11.0481L35.3008 11.6674L35.6266 10.6644L34.7737 10.0452H35.828L36.1537 9.04218Z" stroke="white" stroke-width="2"/>
                            <path d="M28.5555 18.0918C28.5555 14.9444 26.004 12.393 22.8567 12.393C19.7094 12.393 17.158 14.9444 17.158 18.0918V29.4893C17.158 32.6366 19.7094 35.188 22.8567 35.188C26.004 35.188 28.5555 32.6366 28.5555 29.4893V18.0918Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M17.1579 23.7905C15.2583 23.7905 12.4089 25.8022 12.4089 29.4893V38.782M28.5554 23.7905C30.455 23.7905 33.3044 25.8022 33.3044 29.4893V38.5123" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                         </>}
                         serviceName="Regular-pedicure/ massage gun"
                         serviceDesc="Pamper your feet with our rejuvenating pedicure!, leave your feet soft, smooth, and beautifully polished."
                         servicePrice="10,000"
                         />
                        
                    </div>
                    {pedicureViewMore && (
                        <div className='xui-mt-2 xui-d-flex xui-flex-jc-center xui-grid-gap-1'>
                        <div className='viewmore-pedicure-card'>
                            <Service
                            icon={
                            <>
                                <svg width="435" height="35" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M41.8525 22.8407C41.8525 33.3321 33.3481 41.8366 22.8567 41.8366C12.3653 41.8366 3.86084 33.3321 3.86084 22.8407C3.86084 12.3493 12.3653 3.84491 22.8567 3.84491" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M36.1537 9.04218L36.4795 10.0452H37.5338L36.6809 10.6644L37.0066 11.6674L36.1537 11.0481L35.3008 11.6674L35.6266 10.6644L34.7737 10.0452H35.828L36.1537 9.04218Z" stroke="white" stroke-width="2"/>
                                <path d="M28.5555 18.0918C28.5555 14.9444 26.004 12.393 22.8567 12.393C19.7094 12.393 17.158 14.9444 17.158 18.0918V29.4893C17.158 32.6366 19.7094 35.188 22.8567 35.188C26.004 35.188 28.5555 32.6366 28.5555 29.4893V18.0918Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M17.1579 23.7905C15.2583 23.7905 12.4089 25.8022 12.4089 29.4893V38.782M28.5554 23.7905C30.455 23.7905 33.3044 25.8022 33.3044 29.4893V38.5123" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </>}
                            serviceName="Jelly pedicure / massage gun"
                            serviceDesc="Pamper your feet with our rejuvenating pedicure!, leave your feet soft, smooth, and beautifully polished."
                            servicePrice="15,000"
                            />
                        </div>
                        <div className='viewmore-pedicure-card'>
                        <Service
                         icon={
                         <>
                            <svg width="35" height="35" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M41.8525 22.8407C41.8525 33.3321 33.3481 41.8366 22.8567 41.8366C12.3653 41.8366 3.86084 33.3321 3.86084 22.8407C3.86084 12.3493 12.3653 3.84491 22.8567 3.84491" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M36.1537 9.04218L36.4795 10.0452H37.5338L36.6809 10.6644L37.0066 11.6674L36.1537 11.0481L35.3008 11.6674L35.6266 10.6644L34.7737 10.0452H35.828L36.1537 9.04218Z" stroke="white" stroke-width="2"/>
                            <path d="M28.5555 18.0918C28.5555 14.9444 26.004 12.393 22.8567 12.393C19.7094 12.393 17.158 14.9444 17.158 18.0918V29.4893C17.158 32.6366 19.7094 35.188 22.8567 35.188C26.004 35.188 28.5555 32.6366 28.5555 29.4893V18.0918Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M17.1579 23.7905C15.2583 23.7905 12.4089 25.8022 12.4089 29.4893V38.782M28.5554 23.7905C30.455 23.7905 33.3044 25.8022 33.3044 29.4893V38.5123" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                         </>}
                         serviceName="Jelly pedicure/ Hotstone"
                         serviceDesc="Pamper your feet with our rejuvenating pedicure!, leave your feet soft, smooth, and beautifully polished."
                         servicePrice="15,000"
                         />
                        </div>
                        
                        
                    </div>
                    )}
                </div>
                <div className='xui-text-black xui-bdr-rad-2 xui-py-2 xui-lg-py-2'>
                    <div className='xui-d-flex xui-flex-ai-center xui-flex-jc-space-between'>
                        <h2 className='xui-font-sz-150 xui-lg-font-sz-200 bold-font xui-font-w-500'>Skincare Treatment</h2>
                        <p className='xui-font-sz-85 xui-cursor-pointer' onClick={() => setSkincareViewMore(!skincareViewMore)}>{skincareViewMore ? 'View Less' : 'View More'}</p>
                    </div>
                    <div className='xui-mt-2 xui-d-grid xui-lg-grid-col-3 xui-grid-col-1 xui-grid-gap-1'>
                        <Service
                         icon={
                         <>
                            <svg width="35" height="35" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_211_1630)">
                            <path d="M27.1026 5.26387C27.1026 7.39068 25.3785 9.11479 23.2517 9.11479C21.1249 9.11479 19.4008 7.39068 19.4008 5.26387C19.4008 3.13707 21.1249 1.41296 23.2517 1.41296C25.3785 1.41296 27.1026 3.13707 27.1026 5.26387Z" stroke="white" stroke-width="2.27025"/>
                            <path d="M39.4497 12.8096H39.3674H7.13616C6.79964 12.8096 6.4769 12.9433 6.23894 13.1813C6.00099 13.4192 5.8673 13.742 5.8673 14.0785C5.8673 14.415 6.00099 14.7378 6.23894 14.9757L5.43629 15.7784L6.23894 14.9757C6.4769 15.2137 6.79964 15.3474 7.13616 15.3474H16.2072C16.6834 15.3474 17.246 15.4548 17.7778 15.8025C18.3157 16.1541 18.7344 16.6944 19.0096 17.4095C19.3358 18.2535 19.3847 19.353 19.3483 20.356C19.3105 21.3991 19.1713 22.5044 19.0207 23.4485L19.0192 23.4579L19.0176 23.4672L18.6419 25.5933C18.6344 25.6555 18.6218 25.717 18.6043 25.7774L15.5418 43.1975C15.482 43.5379 15.5595 43.8882 15.7573 44.1716L14.8264 44.8213L15.7573 44.1716C15.9548 44.4546 16.2561 44.648 16.5956 44.7097C16.7612 44.7387 16.9308 44.7347 17.0949 44.6978L17.3437 45.8054L17.0949 44.6978C17.2595 44.6608 17.4152 44.5915 17.5528 44.4939C17.6905 44.3962 17.8074 44.2722 17.8967 44.129C17.986 43.9858 18.046 43.8263 18.0732 43.6598L18.0752 43.6471L18.0753 43.6471L20.2042 31.4669L20.2099 31.434L20.2176 31.4015L21.3223 31.6623C20.2176 31.4015 20.2176 31.4013 20.2177 31.401L20.2178 31.4005L20.2181 31.3992L20.2189 31.3958L20.2213 31.386L20.2292 31.3541C20.2358 31.3276 20.2452 31.2909 20.2574 31.2453C20.2816 31.1544 20.3171 31.0275 20.3637 30.8763C20.4557 30.5773 20.5959 30.1677 20.7851 29.7488C20.969 29.3414 21.2264 28.8636 21.5733 28.4705C21.9107 28.0881 22.4714 27.6344 23.2518 27.6344C24.0316 27.6344 24.5946 28.0817 24.9374 28.4677C25.2877 28.8621 25.5459 29.3415 25.7298 29.75C25.9188 30.1699 26.058 30.5804 26.1491 30.88C26.1952 31.0315 26.2302 31.1587 26.2542 31.2499C26.2661 31.2955 26.2754 31.3324 26.2819 31.3589L26.2897 31.391L26.292 31.4009L26.2928 31.4043L26.2931 31.4056L26.2933 31.4062C26.2933 31.4064 26.2934 31.4067 25.1874 31.6623L26.2934 31.4067L26.3003 31.4367L26.3056 31.467L28.4345 43.6579L28.4369 43.6716L28.4368 43.6716C28.4642 43.8406 28.5249 44.0025 28.6155 44.1478C28.7061 44.2931 28.8247 44.4189 28.9644 44.5179C29.1041 44.6169 29.2621 44.6871 29.4292 44.7244C29.5964 44.7617 29.7692 44.7654 29.9378 44.7352C30.1063 44.705 30.2672 44.6416 30.4109 44.5486C30.5547 44.4556 30.6786 44.335 30.7753 44.1937C30.8719 44.0523 30.9395 43.8932 30.9741 43.7255C31.0086 43.5578 31.0094 43.3849 30.9765 43.2169L30.9744 43.206L30.9724 43.195L27.942 25.9622L27.9371 25.9567L27.8813 25.6419L27.4958 23.465L27.4941 23.4554L27.4926 23.4459C27.342 22.5017 27.2028 21.3964 27.165 20.3533C27.1286 19.3505 27.1775 18.2511 27.5036 17.4071C27.7811 16.6849 28.2082 16.1493 28.7382 15.8017C29.2604 15.4592 29.8132 15.3447 30.2794 15.3447H39.3674C39.7039 15.3447 40.0266 15.211 40.2646 14.973C40.5025 14.7351 40.6362 14.4124 40.6362 14.0758C40.6362 13.7393 40.5025 13.4166 40.2646 13.1786M39.4497 12.8096L40.2646 13.1786M39.4497 12.8096C39.7561 12.8296 40.0461 12.9601 40.2646 13.1786M39.4497 12.8096L40.2646 13.1786" stroke="white" stroke-width="2.27025"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_211_1630">
                            <rect width="45.5867" height="45.5867" fill="white" transform="translate(0.458496 0.277832)"/>
                            </clipPath>
                            </defs>
                            </svg>
                         </>}
                         serviceName="Skin tag removal"
                         serviceDesc="Indulge in our expert skincare treatments designed to rejuvenate your skin, enhance its natural glow, and leave you feeling fresh."
                         servicePrice="50,000"
                         />
                        <Service
                         icon={
                         <>
                            <svg width="35" height="35" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_211_1630)">
                            <path d="M27.1026 5.26387C27.1026 7.39068 25.3785 9.11479 23.2517 9.11479C21.1249 9.11479 19.4008 7.39068 19.4008 5.26387C19.4008 3.13707 21.1249 1.41296 23.2517 1.41296C25.3785 1.41296 27.1026 3.13707 27.1026 5.26387Z" stroke="white" stroke-width="2.27025"/>
                            <path d="M39.4497 12.8096H39.3674H7.13616C6.79964 12.8096 6.4769 12.9433 6.23894 13.1813C6.00099 13.4192 5.8673 13.742 5.8673 14.0785C5.8673 14.415 6.00099 14.7378 6.23894 14.9757L5.43629 15.7784L6.23894 14.9757C6.4769 15.2137 6.79964 15.3474 7.13616 15.3474H16.2072C16.6834 15.3474 17.246 15.4548 17.7778 15.8025C18.3157 16.1541 18.7344 16.6944 19.0096 17.4095C19.3358 18.2535 19.3847 19.353 19.3483 20.356C19.3105 21.3991 19.1713 22.5044 19.0207 23.4485L19.0192 23.4579L19.0176 23.4672L18.6419 25.5933C18.6344 25.6555 18.6218 25.717 18.6043 25.7774L15.5418 43.1975C15.482 43.5379 15.5595 43.8882 15.7573 44.1716L14.8264 44.8213L15.7573 44.1716C15.9548 44.4546 16.2561 44.648 16.5956 44.7097C16.7612 44.7387 16.9308 44.7347 17.0949 44.6978L17.3437 45.8054L17.0949 44.6978C17.2595 44.6608 17.4152 44.5915 17.5528 44.4939C17.6905 44.3962 17.8074 44.2722 17.8967 44.129C17.986 43.9858 18.046 43.8263 18.0732 43.6598L18.0752 43.6471L18.0753 43.6471L20.2042 31.4669L20.2099 31.434L20.2176 31.4015L21.3223 31.6623C20.2176 31.4015 20.2176 31.4013 20.2177 31.401L20.2178 31.4005L20.2181 31.3992L20.2189 31.3958L20.2213 31.386L20.2292 31.3541C20.2358 31.3276 20.2452 31.2909 20.2574 31.2453C20.2816 31.1544 20.3171 31.0275 20.3637 30.8763C20.4557 30.5773 20.5959 30.1677 20.7851 29.7488C20.969 29.3414 21.2264 28.8636 21.5733 28.4705C21.9107 28.0881 22.4714 27.6344 23.2518 27.6344C24.0316 27.6344 24.5946 28.0817 24.9374 28.4677C25.2877 28.8621 25.5459 29.3415 25.7298 29.75C25.9188 30.1699 26.058 30.5804 26.1491 30.88C26.1952 31.0315 26.2302 31.1587 26.2542 31.2499C26.2661 31.2955 26.2754 31.3324 26.2819 31.3589L26.2897 31.391L26.292 31.4009L26.2928 31.4043L26.2931 31.4056L26.2933 31.4062C26.2933 31.4064 26.2934 31.4067 25.1874 31.6623L26.2934 31.4067L26.3003 31.4367L26.3056 31.467L28.4345 43.6579L28.4369 43.6716L28.4368 43.6716C28.4642 43.8406 28.5249 44.0025 28.6155 44.1478C28.7061 44.2931 28.8247 44.4189 28.9644 44.5179C29.1041 44.6169 29.2621 44.6871 29.4292 44.7244C29.5964 44.7617 29.7692 44.7654 29.9378 44.7352C30.1063 44.705 30.2672 44.6416 30.4109 44.5486C30.5547 44.4556 30.6786 44.335 30.7753 44.1937C30.8719 44.0523 30.9395 43.8932 30.9741 43.7255C31.0086 43.5578 31.0094 43.3849 30.9765 43.2169L30.9744 43.206L30.9724 43.195L27.942 25.9622L27.9371 25.9567L27.8813 25.6419L27.4958 23.465L27.4941 23.4554L27.4926 23.4459C27.342 22.5017 27.2028 21.3964 27.165 20.3533C27.1286 19.3505 27.1775 18.2511 27.5036 17.4071C27.7811 16.6849 28.2082 16.1493 28.7382 15.8017C29.2604 15.4592 29.8132 15.3447 30.2794 15.3447H39.3674C39.7039 15.3447 40.0266 15.211 40.2646 14.973C40.5025 14.7351 40.6362 14.4124 40.6362 14.0758C40.6362 13.7393 40.5025 13.4166 40.2646 13.1786M39.4497 12.8096L40.2646 13.1786M39.4497 12.8096C39.7561 12.8296 40.0461 12.9601 40.2646 13.1786M39.4497 12.8096L40.2646 13.1786" stroke="white" stroke-width="2.27025"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_211_1630">
                            <rect width="45.5867" height="45.5867" fill="white" transform="translate(0.458496 0.277832)"/>
                            </clipPath>
                            </defs>
                            </svg>
                         </>}
                         serviceName="Full body waxing"
                         serviceDesc="Indulge in our expert skincare treatments designed to rejuvenate your skin, enhance its natural glow, and leave you feeling fresh."
                         servicePrice="45,000"
                         />
                        <Service
                         icon={
                         <>
                            <svg width="35" height="35" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_211_1630)">
                            <path d="M27.1026 5.26387C27.1026 7.39068 25.3785 9.11479 23.2517 9.11479C21.1249 9.11479 19.4008 7.39068 19.4008 5.26387C19.4008 3.13707 21.1249 1.41296 23.2517 1.41296C25.3785 1.41296 27.1026 3.13707 27.1026 5.26387Z" stroke="white" stroke-width="2.27025"/>
                            <path d="M39.4497 12.8096H39.3674H7.13616C6.79964 12.8096 6.4769 12.9433 6.23894 13.1813C6.00099 13.4192 5.8673 13.742 5.8673 14.0785C5.8673 14.415 6.00099 14.7378 6.23894 14.9757L5.43629 15.7784L6.23894 14.9757C6.4769 15.2137 6.79964 15.3474 7.13616 15.3474H16.2072C16.6834 15.3474 17.246 15.4548 17.7778 15.8025C18.3157 16.1541 18.7344 16.6944 19.0096 17.4095C19.3358 18.2535 19.3847 19.353 19.3483 20.356C19.3105 21.3991 19.1713 22.5044 19.0207 23.4485L19.0192 23.4579L19.0176 23.4672L18.6419 25.5933C18.6344 25.6555 18.6218 25.717 18.6043 25.7774L15.5418 43.1975C15.482 43.5379 15.5595 43.8882 15.7573 44.1716L14.8264 44.8213L15.7573 44.1716C15.9548 44.4546 16.2561 44.648 16.5956 44.7097C16.7612 44.7387 16.9308 44.7347 17.0949 44.6978L17.3437 45.8054L17.0949 44.6978C17.2595 44.6608 17.4152 44.5915 17.5528 44.4939C17.6905 44.3962 17.8074 44.2722 17.8967 44.129C17.986 43.9858 18.046 43.8263 18.0732 43.6598L18.0752 43.6471L18.0753 43.6471L20.2042 31.4669L20.2099 31.434L20.2176 31.4015L21.3223 31.6623C20.2176 31.4015 20.2176 31.4013 20.2177 31.401L20.2178 31.4005L20.2181 31.3992L20.2189 31.3958L20.2213 31.386L20.2292 31.3541C20.2358 31.3276 20.2452 31.2909 20.2574 31.2453C20.2816 31.1544 20.3171 31.0275 20.3637 30.8763C20.4557 30.5773 20.5959 30.1677 20.7851 29.7488C20.969 29.3414 21.2264 28.8636 21.5733 28.4705C21.9107 28.0881 22.4714 27.6344 23.2518 27.6344C24.0316 27.6344 24.5946 28.0817 24.9374 28.4677C25.2877 28.8621 25.5459 29.3415 25.7298 29.75C25.9188 30.1699 26.058 30.5804 26.1491 30.88C26.1952 31.0315 26.2302 31.1587 26.2542 31.2499C26.2661 31.2955 26.2754 31.3324 26.2819 31.3589L26.2897 31.391L26.292 31.4009L26.2928 31.4043L26.2931 31.4056L26.2933 31.4062C26.2933 31.4064 26.2934 31.4067 25.1874 31.6623L26.2934 31.4067L26.3003 31.4367L26.3056 31.467L28.4345 43.6579L28.4369 43.6716L28.4368 43.6716C28.4642 43.8406 28.5249 44.0025 28.6155 44.1478C28.7061 44.2931 28.8247 44.4189 28.9644 44.5179C29.1041 44.6169 29.2621 44.6871 29.4292 44.7244C29.5964 44.7617 29.7692 44.7654 29.9378 44.7352C30.1063 44.705 30.2672 44.6416 30.4109 44.5486C30.5547 44.4556 30.6786 44.335 30.7753 44.1937C30.8719 44.0523 30.9395 43.8932 30.9741 43.7255C31.0086 43.5578 31.0094 43.3849 30.9765 43.2169L30.9744 43.206L30.9724 43.195L27.942 25.9622L27.9371 25.9567L27.8813 25.6419L27.4958 23.465L27.4941 23.4554L27.4926 23.4459C27.342 22.5017 27.2028 21.3964 27.165 20.3533C27.1286 19.3505 27.1775 18.2511 27.5036 17.4071C27.7811 16.6849 28.2082 16.1493 28.7382 15.8017C29.2604 15.4592 29.8132 15.3447 30.2794 15.3447H39.3674C39.7039 15.3447 40.0266 15.211 40.2646 14.973C40.5025 14.7351 40.6362 14.4124 40.6362 14.0758C40.6362 13.7393 40.5025 13.4166 40.2646 13.1786M39.4497 12.8096L40.2646 13.1786M39.4497 12.8096C39.7561 12.8296 40.0461 12.9601 40.2646 13.1786M39.4497 12.8096L40.2646 13.1786" stroke="white" stroke-width="2.27025"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_211_1630">
                            <rect width="45.5867" height="45.5867" fill="white" transform="translate(0.458496 0.277832)"/>
                            </clipPath>
                            </defs>
                            </svg>
                         </>}
                         serviceName="Virginal and under arm waxing"
                         serviceDesc="Indulge in our expert skincare treatments designed to rejuvenate your skin, enhance its natural glow, and leave you feeling fresh."
                         servicePrice="30,000"
                         />
                        
                    </div>
                    {skincareViewMore && (
                        <div className='xui-mt-2 xui-d-grid xui-lg-grid-col-3 xui-grid-col-1 xui-grid-gap-1'>
                        <Service
                         icon={
                         <>
                            <svg width="35" height="35" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_211_1630)">
                            <path d="M27.1026 5.26387C27.1026 7.39068 25.3785 9.11479 23.2517 9.11479C21.1249 9.11479 19.4008 7.39068 19.4008 5.26387C19.4008 3.13707 21.1249 1.41296 23.2517 1.41296C25.3785 1.41296 27.1026 3.13707 27.1026 5.26387Z" stroke="white" stroke-width="2.27025"/>
                            <path d="M39.4497 12.8096H39.3674H7.13616C6.79964 12.8096 6.4769 12.9433 6.23894 13.1813C6.00099 13.4192 5.8673 13.742 5.8673 14.0785C5.8673 14.415 6.00099 14.7378 6.23894 14.9757L5.43629 15.7784L6.23894 14.9757C6.4769 15.2137 6.79964 15.3474 7.13616 15.3474H16.2072C16.6834 15.3474 17.246 15.4548 17.7778 15.8025C18.3157 16.1541 18.7344 16.6944 19.0096 17.4095C19.3358 18.2535 19.3847 19.353 19.3483 20.356C19.3105 21.3991 19.1713 22.5044 19.0207 23.4485L19.0192 23.4579L19.0176 23.4672L18.6419 25.5933C18.6344 25.6555 18.6218 25.717 18.6043 25.7774L15.5418 43.1975C15.482 43.5379 15.5595 43.8882 15.7573 44.1716L14.8264 44.8213L15.7573 44.1716C15.9548 44.4546 16.2561 44.648 16.5956 44.7097C16.7612 44.7387 16.9308 44.7347 17.0949 44.6978L17.3437 45.8054L17.0949 44.6978C17.2595 44.6608 17.4152 44.5915 17.5528 44.4939C17.6905 44.3962 17.8074 44.2722 17.8967 44.129C17.986 43.9858 18.046 43.8263 18.0732 43.6598L18.0752 43.6471L18.0753 43.6471L20.2042 31.4669L20.2099 31.434L20.2176 31.4015L21.3223 31.6623C20.2176 31.4015 20.2176 31.4013 20.2177 31.401L20.2178 31.4005L20.2181 31.3992L20.2189 31.3958L20.2213 31.386L20.2292 31.3541C20.2358 31.3276 20.2452 31.2909 20.2574 31.2453C20.2816 31.1544 20.3171 31.0275 20.3637 30.8763C20.4557 30.5773 20.5959 30.1677 20.7851 29.7488C20.969 29.3414 21.2264 28.8636 21.5733 28.4705C21.9107 28.0881 22.4714 27.6344 23.2518 27.6344C24.0316 27.6344 24.5946 28.0817 24.9374 28.4677C25.2877 28.8621 25.5459 29.3415 25.7298 29.75C25.9188 30.1699 26.058 30.5804 26.1491 30.88C26.1952 31.0315 26.2302 31.1587 26.2542 31.2499C26.2661 31.2955 26.2754 31.3324 26.2819 31.3589L26.2897 31.391L26.292 31.4009L26.2928 31.4043L26.2931 31.4056L26.2933 31.4062C26.2933 31.4064 26.2934 31.4067 25.1874 31.6623L26.2934 31.4067L26.3003 31.4367L26.3056 31.467L28.4345 43.6579L28.4369 43.6716L28.4368 43.6716C28.4642 43.8406 28.5249 44.0025 28.6155 44.1478C28.7061 44.2931 28.8247 44.4189 28.9644 44.5179C29.1041 44.6169 29.2621 44.6871 29.4292 44.7244C29.5964 44.7617 29.7692 44.7654 29.9378 44.7352C30.1063 44.705 30.2672 44.6416 30.4109 44.5486C30.5547 44.4556 30.6786 44.335 30.7753 44.1937C30.8719 44.0523 30.9395 43.8932 30.9741 43.7255C31.0086 43.5578 31.0094 43.3849 30.9765 43.2169L30.9744 43.206L30.9724 43.195L27.942 25.9622L27.9371 25.9567L27.8813 25.6419L27.4958 23.465L27.4941 23.4554L27.4926 23.4459C27.342 22.5017 27.2028 21.3964 27.165 20.3533C27.1286 19.3505 27.1775 18.2511 27.5036 17.4071C27.7811 16.6849 28.2082 16.1493 28.7382 15.8017C29.2604 15.4592 29.8132 15.3447 30.2794 15.3447H39.3674C39.7039 15.3447 40.0266 15.211 40.2646 14.973C40.5025 14.7351 40.6362 14.4124 40.6362 14.0758C40.6362 13.7393 40.5025 13.4166 40.2646 13.1786M39.4497 12.8096L40.2646 13.1786M39.4497 12.8096C39.7561 12.8296 40.0461 12.9601 40.2646 13.1786M39.4497 12.8096L40.2646 13.1786" stroke="white" stroke-width="2.27025"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_211_1630">
                            <rect width="45.5867" height="45.5867" fill="white" transform="translate(0.458496 0.277832)"/>
                            </clipPath>
                            </defs>
                            </svg>
                         </>}
                         serviceName="Body polishing and sauna bath"
                         serviceDesc="Indulge in our expert skincare treatments designed to rejuvenate your skin, enhance its natural glow, and leave you feeling fresh."
                         servicePrice="40,000"
                         />
                        <Service
                         icon={
                         <>
                            <svg width="35" height="35" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_211_1630)">
                            <path d="M27.1026 5.26387C27.1026 7.39068 25.3785 9.11479 23.2517 9.11479C21.1249 9.11479 19.4008 7.39068 19.4008 5.26387C19.4008 3.13707 21.1249 1.41296 23.2517 1.41296C25.3785 1.41296 27.1026 3.13707 27.1026 5.26387Z" stroke="white" stroke-width="2.27025"/>
                            <path d="M39.4497 12.8096H39.3674H7.13616C6.79964 12.8096 6.4769 12.9433 6.23894 13.1813C6.00099 13.4192 5.8673 13.742 5.8673 14.0785C5.8673 14.415 6.00099 14.7378 6.23894 14.9757L5.43629 15.7784L6.23894 14.9757C6.4769 15.2137 6.79964 15.3474 7.13616 15.3474H16.2072C16.6834 15.3474 17.246 15.4548 17.7778 15.8025C18.3157 16.1541 18.7344 16.6944 19.0096 17.4095C19.3358 18.2535 19.3847 19.353 19.3483 20.356C19.3105 21.3991 19.1713 22.5044 19.0207 23.4485L19.0192 23.4579L19.0176 23.4672L18.6419 25.5933C18.6344 25.6555 18.6218 25.717 18.6043 25.7774L15.5418 43.1975C15.482 43.5379 15.5595 43.8882 15.7573 44.1716L14.8264 44.8213L15.7573 44.1716C15.9548 44.4546 16.2561 44.648 16.5956 44.7097C16.7612 44.7387 16.9308 44.7347 17.0949 44.6978L17.3437 45.8054L17.0949 44.6978C17.2595 44.6608 17.4152 44.5915 17.5528 44.4939C17.6905 44.3962 17.8074 44.2722 17.8967 44.129C17.986 43.9858 18.046 43.8263 18.0732 43.6598L18.0752 43.6471L18.0753 43.6471L20.2042 31.4669L20.2099 31.434L20.2176 31.4015L21.3223 31.6623C20.2176 31.4015 20.2176 31.4013 20.2177 31.401L20.2178 31.4005L20.2181 31.3992L20.2189 31.3958L20.2213 31.386L20.2292 31.3541C20.2358 31.3276 20.2452 31.2909 20.2574 31.2453C20.2816 31.1544 20.3171 31.0275 20.3637 30.8763C20.4557 30.5773 20.5959 30.1677 20.7851 29.7488C20.969 29.3414 21.2264 28.8636 21.5733 28.4705C21.9107 28.0881 22.4714 27.6344 23.2518 27.6344C24.0316 27.6344 24.5946 28.0817 24.9374 28.4677C25.2877 28.8621 25.5459 29.3415 25.7298 29.75C25.9188 30.1699 26.058 30.5804 26.1491 30.88C26.1952 31.0315 26.2302 31.1587 26.2542 31.2499C26.2661 31.2955 26.2754 31.3324 26.2819 31.3589L26.2897 31.391L26.292 31.4009L26.2928 31.4043L26.2931 31.4056L26.2933 31.4062C26.2933 31.4064 26.2934 31.4067 25.1874 31.6623L26.2934 31.4067L26.3003 31.4367L26.3056 31.467L28.4345 43.6579L28.4369 43.6716L28.4368 43.6716C28.4642 43.8406 28.5249 44.0025 28.6155 44.1478C28.7061 44.2931 28.8247 44.4189 28.9644 44.5179C29.1041 44.6169 29.2621 44.6871 29.4292 44.7244C29.5964 44.7617 29.7692 44.7654 29.9378 44.7352C30.1063 44.705 30.2672 44.6416 30.4109 44.5486C30.5547 44.4556 30.6786 44.335 30.7753 44.1937C30.8719 44.0523 30.9395 43.8932 30.9741 43.7255C31.0086 43.5578 31.0094 43.3849 30.9765 43.2169L30.9744 43.206L30.9724 43.195L27.942 25.9622L27.9371 25.9567L27.8813 25.6419L27.4958 23.465L27.4941 23.4554L27.4926 23.4459C27.342 22.5017 27.2028 21.3964 27.165 20.3533C27.1286 19.3505 27.1775 18.2511 27.5036 17.4071C27.7811 16.6849 28.2082 16.1493 28.7382 15.8017C29.2604 15.4592 29.8132 15.3447 30.2794 15.3447H39.3674C39.7039 15.3447 40.0266 15.211 40.2646 14.973C40.5025 14.7351 40.6362 14.4124 40.6362 14.0758C40.6362 13.7393 40.5025 13.4166 40.2646 13.1786M39.4497 12.8096L40.2646 13.1786M39.4497 12.8096C39.7561 12.8296 40.0461 12.9601 40.2646 13.1786M39.4497 12.8096L40.2646 13.1786" stroke="white" stroke-width="2.27025"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_211_1630">
                            <rect width="45.5867" height="45.5867" fill="white" transform="translate(0.458496 0.277832)"/>
                            </clipPath>
                            </defs>
                            </svg>
                         </>}
                         serviceName="Teeth whitening"
                         serviceDesc="Indulge in our expert skincare treatments designed to rejuvenate your skin, enhance its natural glow, and leave you feeling fresh."
                         servicePrice="40,000"
                         />
                        <Service
                         icon={
                         <>
                            <svg width="35" height="35" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_211_1630)">
                            <path d="M27.1026 5.26387C27.1026 7.39068 25.3785 9.11479 23.2517 9.11479C21.1249 9.11479 19.4008 7.39068 19.4008 5.26387C19.4008 3.13707 21.1249 1.41296 23.2517 1.41296C25.3785 1.41296 27.1026 3.13707 27.1026 5.26387Z" stroke="white" stroke-width="2.27025"/>
                            <path d="M39.4497 12.8096H39.3674H7.13616C6.79964 12.8096 6.4769 12.9433 6.23894 13.1813C6.00099 13.4192 5.8673 13.742 5.8673 14.0785C5.8673 14.415 6.00099 14.7378 6.23894 14.9757L5.43629 15.7784L6.23894 14.9757C6.4769 15.2137 6.79964 15.3474 7.13616 15.3474H16.2072C16.6834 15.3474 17.246 15.4548 17.7778 15.8025C18.3157 16.1541 18.7344 16.6944 19.0096 17.4095C19.3358 18.2535 19.3847 19.353 19.3483 20.356C19.3105 21.3991 19.1713 22.5044 19.0207 23.4485L19.0192 23.4579L19.0176 23.4672L18.6419 25.5933C18.6344 25.6555 18.6218 25.717 18.6043 25.7774L15.5418 43.1975C15.482 43.5379 15.5595 43.8882 15.7573 44.1716L14.8264 44.8213L15.7573 44.1716C15.9548 44.4546 16.2561 44.648 16.5956 44.7097C16.7612 44.7387 16.9308 44.7347 17.0949 44.6978L17.3437 45.8054L17.0949 44.6978C17.2595 44.6608 17.4152 44.5915 17.5528 44.4939C17.6905 44.3962 17.8074 44.2722 17.8967 44.129C17.986 43.9858 18.046 43.8263 18.0732 43.6598L18.0752 43.6471L18.0753 43.6471L20.2042 31.4669L20.2099 31.434L20.2176 31.4015L21.3223 31.6623C20.2176 31.4015 20.2176 31.4013 20.2177 31.401L20.2178 31.4005L20.2181 31.3992L20.2189 31.3958L20.2213 31.386L20.2292 31.3541C20.2358 31.3276 20.2452 31.2909 20.2574 31.2453C20.2816 31.1544 20.3171 31.0275 20.3637 30.8763C20.4557 30.5773 20.5959 30.1677 20.7851 29.7488C20.969 29.3414 21.2264 28.8636 21.5733 28.4705C21.9107 28.0881 22.4714 27.6344 23.2518 27.6344C24.0316 27.6344 24.5946 28.0817 24.9374 28.4677C25.2877 28.8621 25.5459 29.3415 25.7298 29.75C25.9188 30.1699 26.058 30.5804 26.1491 30.88C26.1952 31.0315 26.2302 31.1587 26.2542 31.2499C26.2661 31.2955 26.2754 31.3324 26.2819 31.3589L26.2897 31.391L26.292 31.4009L26.2928 31.4043L26.2931 31.4056L26.2933 31.4062C26.2933 31.4064 26.2934 31.4067 25.1874 31.6623L26.2934 31.4067L26.3003 31.4367L26.3056 31.467L28.4345 43.6579L28.4369 43.6716L28.4368 43.6716C28.4642 43.8406 28.5249 44.0025 28.6155 44.1478C28.7061 44.2931 28.8247 44.4189 28.9644 44.5179C29.1041 44.6169 29.2621 44.6871 29.4292 44.7244C29.5964 44.7617 29.7692 44.7654 29.9378 44.7352C30.1063 44.705 30.2672 44.6416 30.4109 44.5486C30.5547 44.4556 30.6786 44.335 30.7753 44.1937C30.8719 44.0523 30.9395 43.8932 30.9741 43.7255C31.0086 43.5578 31.0094 43.3849 30.9765 43.2169L30.9744 43.206L30.9724 43.195L27.942 25.9622L27.9371 25.9567L27.8813 25.6419L27.4958 23.465L27.4941 23.4554L27.4926 23.4459C27.342 22.5017 27.2028 21.3964 27.165 20.3533C27.1286 19.3505 27.1775 18.2511 27.5036 17.4071C27.7811 16.6849 28.2082 16.1493 28.7382 15.8017C29.2604 15.4592 29.8132 15.3447 30.2794 15.3447H39.3674C39.7039 15.3447 40.0266 15.211 40.2646 14.973C40.5025 14.7351 40.6362 14.4124 40.6362 14.0758C40.6362 13.7393 40.5025 13.4166 40.2646 13.1786M39.4497 12.8096L40.2646 13.1786M39.4497 12.8096C39.7561 12.8296 40.0461 12.9601 40.2646 13.1786M39.4497 12.8096L40.2646 13.1786" stroke="white" stroke-width="2.27025"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_211_1630">
                            <rect width="45.5867" height="45.5867" fill="white" transform="translate(0.458496 0.277832)"/>
                            </clipPath>
                            </defs>
                            </svg>
                         </>}
                         serviceName="Scaling and polishing"
                         serviceDesc="Indulge in our expert skincare treatments designed to rejuvenate your skin, enhance its natural glow, and leave you feeling fresh."
                         servicePrice="40,000"
                         />
                        
                    </div>
                    )}
                </div>
            </section>
        </>
    );
}
