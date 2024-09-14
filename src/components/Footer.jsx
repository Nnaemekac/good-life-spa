import { Link,  } from "react-router-dom";
import Logo from "../assets/images/footer-logo.png";
import GrascopeLogo from "../assets/images/grascope-logo.png";
import LinkButton from "./LinkButton";

export default function Footer(){

    return(
        <>
            <section className="xui-pt-1 xui-pb-5 xui-container xui-bg-black xui-text-white footer">
                {/* <form>
                    <div className="xui-d-flex xui-flex-jc-space-between xui-flex-ai-center xui-max-w-400 xui-w-fluid-100 xui-mx-auto xui-mt-1 xui-p-1 xui-pos-relative xui-bg-white xui-bdr-rad-1-half">
                        <input style={{"outline": "none", "border": "none", "background": "none"}} className="xui-pl-1 xui-font-sz-90" type="text" placeholder="Your email address" />
                        <LinkButton text="Get Notified" isButton={true} customClass="xui-btn-small xui-bdr-rad-1 xui-pos-absolute" customStyle={{"right": "10px"}} />
                    </div>
                </form> */}
                
                <div className='xui-d-grid xui-lg-grid-col-4 xui-grid-col-1 xui-grid-col-1 xui-lg-grid-gap-1 xui-grid-gap-2 xui-mt-3'>
                    <div>
                        <img className="xui-img-120" src={Logo} alt="" />
                        <p className='xui-font-sz-100 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>Welcome to Good Life Spa, your sanctuary for relaxation and rejuvenation. </p>
                    </div>
                    <div>
                        <p className='xui-font-sz-120'>Contact Us</p>
                        <div className="xui-my-1">
                            <p className="xui-font-sz-85 xui-opacity-6">Main Branch</p>
                            <div className="spa-text-purple xui-font-w-500 bold-font xui-mt-half xui-text-dc-none xui-d-inline-block">
                                <p className="xui-font-sz-90">The Good Life Spa</p>
                                <p className="xui-font-sz-90">No 1 pendulum close, directly</p>
                                <p className="xui-font-sz-90">opposite parkland estate Novotel hotel stadium road</p>
                            </div>
                        </div>
                        <div className="xui-my-1">
                            <p className="xui-font-sz-85 xui-opacity-6">Other Branch</p>
                            <div className="spa-text-purple xui-font-w-500 bold-font xui-mt-half xui-text-dc-none xui-d-inline-block">
                                <p className="xui-font-sz-90">Novotel hotel stadium road</p>
                            </div>
                        </div>
                        {/* <div className="xui-my-1">
                            <p className="xui-font-sz-85 xui-opacity-6">Branch 2</p>
                            <Link to="/" target="_blank" className="spa-text-purple xui-mt-half xui-text-dc-none xui-d-inline-block">
                                <p className="xui-font-sz-90">Good Life Spa</p>
                                <p className="xui-font-sz-90 xui-mt-half">456 Tranquility Road Old GRA Port</p>
                                <p className="xui-font-sz-90 xui-mt-half">Harcourt, Rivers State Nigeria</p>
                            </Link>
                        </div>
                        <div className="xui-my-1">
                            <p className="xui-font-sz-85 xui-opacity-6">Branch 3</p>
                            <Link to="/" target="_blank" className="spa-text-purple xui-mt-half xui-text-dc-none xui-d-inline-block">
                                <p className="xui-font-sz-90">Good Life Spa</p>
                                <p className="xui-font-sz-90 xui-mt-half">789 Serenity Street New Layout</p>
                                <p className="xui-font-sz-90 xui-mt-half">Port Harcourt, Rivers State Nigeria</p>
                            </Link>
                        </div> */}
                    </div>
                    <div>
                        <p className='xui-font-sz-120'>Quick Contact</p>
                        <div className="xui-my-1">
                            <p className="xui-font-sz-85 xui-opacity-6">Call us now on</p>
                            <Link to="tel:+234 567 896 8000" className="spa-text-purple xui-mt-half xui-text-dc-none xui-font-sz-90 xui-d-inline-block">+234 567 896 8000</Link>
                        </div>
                    </div>
                    <div>
                        <LinkButton text="Book Appointment" route={"mailto:blessedadoyi@gmail.com?subject="+ "&body="} customClass="xui-btn-small xui-btn-block xui-bdr-rad-2"/>
                        <div className="xui-mt-1-half xui-d-flex xui-flex-ai-center xui-grid-gap-2 xui-flex-jc-center">
                            <Link to="https://www.instagram.com/the.goodlife_spa?igsh=MW1sd25razY4YXA0aQ==" target='_blank'>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.35435 1.22892H17.1187C20.4817 1.22892 23.2149 3.96207 23.2149 7.32514V17.0894C23.2149 18.7063 22.5726 20.2569 21.4293 21.4001C20.2861 22.5434 18.7355 23.1857 17.1187 23.1857H7.35435C3.99128 23.1857 1.25812 20.4525 1.25812 17.0894V7.32514C1.25812 5.70832 1.9004 4.15772 3.04367 3.01446C4.18693 1.8712 5.73753 1.22892 7.35435 1.22892ZM17.7684 6.67541L17.3117 7.13205L17.7684 6.67541C17.617 6.52402 17.532 6.3187 17.532 6.10461C17.532 5.89051 17.617 5.68519 17.7684 5.53381C17.9198 5.38242 18.1251 5.29737 18.3392 5.29737C18.5533 5.29737 18.7586 5.38242 18.91 5.53381C19.0614 5.68519 19.1464 5.89051 19.1464 6.10461C19.1464 6.3187 19.0614 6.52402 18.91 6.67541C18.7586 6.82679 18.5533 6.91184 18.3392 6.91184C18.1251 6.91184 17.9198 6.82679 17.7684 6.67541ZM7.12187 2.26218C5.84074 2.26218 4.61209 2.7711 3.7062 3.67699C2.80031 4.58288 2.29138 5.81154 2.29138 7.09266V17.3219C2.29138 19.9918 4.452 22.1524 7.12187 22.1524H17.3511C18.6323 22.1524 19.8609 21.6435 20.7668 20.7376C21.6727 19.8317 22.1816 18.603 22.1816 17.3219V7.09266C22.1816 4.42279 20.021 2.26218 17.3511 2.26218H7.12187ZM12.2365 7.041C13.6067 7.041 14.9208 7.5853 15.8896 8.55417C16.8585 9.52304 17.4028 10.8371 17.4028 12.2073C17.4028 13.5775 16.8585 14.8915 15.8896 15.8604C14.9208 16.8293 13.6067 17.3736 12.2365 17.3736C10.8663 17.3736 9.55225 16.8293 8.58338 15.8604C7.61451 14.8915 7.0702 13.5775 7.0702 12.2073C7.0702 10.8371 7.61451 9.52304 8.58338 8.55417C9.55225 7.5853 10.8663 7.041 12.2365 7.041ZM12.2365 8.07426C11.1404 8.07426 10.0891 8.5097 9.314 9.28479C8.53891 10.0599 8.10346 11.1111 8.10346 12.2073C8.10346 13.3034 8.53891 14.3547 9.314 15.1298C10.0891 15.9049 11.1404 16.3403 12.2365 16.3403C13.3327 16.3403 14.3839 15.9049 15.159 15.1298C15.9341 14.3547 16.3695 13.3034 16.3695 12.2073C16.3695 11.1111 15.9341 10.0599 15.159 9.28479C14.3839 8.5097 13.3327 8.07426 12.2365 8.07426Z" stroke="#A43375" stroke-width="1.29157"/>
                                </svg>
                            </Link>

                        </div>
                    </div>
                    
                </div>
                <div className="xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-mt-1-half xui-grid-gap-8">
                    <p className="xui-font-sz-85">Quick Links:</p>
                    <Link to='/' className="xui-font-sz-85 xui-text-white xui-text-dc-none">Home</Link>
                    <Link to='/about' className="xui-font-sz-85 xui-text-white xui-text-dc-none">About us</Link>
                    {/* <Link to='tel:+234 567 896 8000' className="xui-font-sz-85 xui-text-white xui-text-dc-none">Book appointment</Link> */}
                </div>
                <div className="xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-mt-3">
                    <p className="xui-font-sz-90">&copy; 2024 Powered by</p>
                    <Link to='http://grascope.com/' target="_blank"><img src={GrascopeLogo} className="xui-img-80 xui-mx-half" alt="" /></Link>
                    <p className="xui-font-sz-90">All right reserved</p>
                </div>
            </section>
    
        </>
    )
}