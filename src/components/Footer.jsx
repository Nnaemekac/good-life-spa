import { Link,  } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import GrascopeLogo from "../assets/images/grascope-logo.png";
import LinkButton from "./LinkButton";

export default function Footer(){

    return(
        <>
            <section className="xui-pt-3 xui-pb-5 xui-container xui-bg-black xui-text-white footer">
                <h3 className="xui-font-sz-180 xui-text-center">Get Update On Our Spa Experience </h3>
                <form>
                    <div className="xui-d-flex xui-flex-jc-space-between xui-flex-ai-center xui-max-w-400 xui-w-fluid-100 xui-mx-auto xui-mt-1 xui-p-1 xui-pos-relative xui-bg-white xui-bdr-rad-1-half">
                        <input style={{"outline": "none", "border": "none", "background": "none"}} className="xui-pl-1 xui-font-sz-90" type="text" placeholder="Your email address" />
                        <LinkButton text="Get Notified" isButton={true} customClass="xui-btn-small xui-bdr-rad-1 xui-pos-absolute" customStyle={{"right": "10px"}} />
                    </div>
                </form>
                
                <div className='xui-d-grid xui-lg-grid-col-4 xui-grid-col-1 xui-grid-col-1 xui-lg-grid-gap-1 xui-grid-gap-2 xui-mt-3'>
                    <div>
                        <img className="xui-mt-1 xui-img-120" src={Logo} alt="" />
                        <p className='xui-font-sz-85 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>Welcome to Good Life Spa, your sanctuary for relaxation and rejuvenation. </p>
                    </div>
                    <div>
                        <p className='xui-font-sz-120'>Contact Us</p>
                        <div className="xui-my-1">
                            <p className="xui-font-sz-70 xui-opacity-6">Main Branch</p>
                            <Link to="/" target="_blank" className="spa-text-purple xui-mt-half xui-text-dc-none xui-d-inline-block">
                                <p className="xui-font-sz-80">Good Life Spa</p>
                                <p className="xui-font-sz-80 xui-mt-half">123 Wellness Avenue GRA Phase 2</p>
                                <p className="xui-font-sz-80 xui-mt-half">Port Harcourt, Rivers State Nigeria</p>
                            </Link>
                        </div>
                        <div className="xui-my-1">
                            <p className="xui-font-sz-70 xui-opacity-6">Branch 2</p>
                            <Link to="/" target="_blank" className="spa-text-purple xui-mt-half xui-text-dc-none xui-d-inline-block">
                                <p className="xui-font-sz-80">Good Life Spa</p>
                                <p className="xui-font-sz-80 xui-mt-half">456 Tranquility Road Old GRA Port</p>
                                <p className="xui-font-sz-80 xui-mt-half">Harcourt, Rivers State Nigeria</p>
                            </Link>
                        </div>
                        <div className="xui-my-1">
                            <p className="xui-font-sz-70 xui-opacity-6">Branch 3</p>
                            <Link to="/" target="_blank" className="spa-text-purple xui-mt-half xui-text-dc-none xui-d-inline-block">
                                <p className="xui-font-sz-80">Good Life Spa</p>
                                <p className="xui-font-sz-80 xui-mt-half">789 Serenity Street New Layout</p>
                                <p className="xui-font-sz-80 xui-mt-half">Port Harcourt, Rivers State Nigeria</p>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <p className='xui-font-sz-120'>Quick Contact</p>
                        <div className="xui-my-1">
                            <p className="xui-font-sz-70 xui-opacity-6">Call us now on</p>
                            <Link to="tel:+234 567 896 8000" className="spa-text-purple xui-mt-half xui-text-dc-none xui-font-sz-80 xui-d-inline-block">+234 567 896 8000</Link>
                        </div>
                    </div>
                    <div>
                        <LinkButton text="Book Appointment" route="tel:+234 567 896 8000" customClass="xui-btn-small xui-btn-block xui-bdr-rad-2"/>
                        <div className="xui-mt-1-half xui-d-flex xui-flex-ai-center xui-grid-gap-2 xui-flex-jc-center">
                            <Link to="/">
                                <svg width="20" height="20" viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.3478 9.86516L22.7582 2.05862H19.4507L13.7947 8.0208L8.77691 2.05862H1.57639L9.97807 12.0398L2.08225 20.3559H5.39083L11.5312 13.8878L16.9784 20.3559H24.1789L15.3478 9.86516ZM12.7862 12.564L11.2309 10.7169L5.19279 3.54711H7.67907L12.5526 9.32631L14.1057 11.1743L20.583 18.8674H18.0967L12.7862 12.564Z" fill="#A43375"/>
                                </svg>
                            </Link>
                            <Link to="/">
                                <svg width="20" height="20" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.4718 1.90607C7.22378 1.90607 2.1705 6.99164 2.1705 13.2719C2.1705 18.9387 6.30353 23.6529 11.712 24.5086V16.5654H8.83825V13.2719H11.712V10.7695C11.712 7.91188 13.4072 6.34585 15.9742 6.34585C17.2173 6.34585 18.5089 6.57188 18.5089 6.57188V9.3649H17.0882C15.6836 9.3649 15.2477 10.2367 15.2477 11.1408V13.2719H18.3797L17.8793 16.5654H15.2477V24.5086C20.6561 23.6529 24.7892 18.9548 24.7892 13.2719C24.7892 6.99164 19.7359 1.90607 13.4879 1.90607H13.4718Z" fill="#A43375"/>
                                </svg>
                            </Link>
                            <Link to="/">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.35435 1.22892H17.1187C20.4817 1.22892 23.2149 3.96207 23.2149 7.32514V17.0894C23.2149 18.7063 22.5726 20.2569 21.4293 21.4001C20.2861 22.5434 18.7355 23.1857 17.1187 23.1857H7.35435C3.99128 23.1857 1.25812 20.4525 1.25812 17.0894V7.32514C1.25812 5.70832 1.9004 4.15772 3.04367 3.01446C4.18693 1.8712 5.73753 1.22892 7.35435 1.22892ZM17.7684 6.67541L17.3117 7.13205L17.7684 6.67541C17.617 6.52402 17.532 6.3187 17.532 6.10461C17.532 5.89051 17.617 5.68519 17.7684 5.53381C17.9198 5.38242 18.1251 5.29737 18.3392 5.29737C18.5533 5.29737 18.7586 5.38242 18.91 5.53381C19.0614 5.68519 19.1464 5.89051 19.1464 6.10461C19.1464 6.3187 19.0614 6.52402 18.91 6.67541C18.7586 6.82679 18.5533 6.91184 18.3392 6.91184C18.1251 6.91184 17.9198 6.82679 17.7684 6.67541ZM7.12187 2.26218C5.84074 2.26218 4.61209 2.7711 3.7062 3.67699C2.80031 4.58288 2.29138 5.81154 2.29138 7.09266V17.3219C2.29138 19.9918 4.452 22.1524 7.12187 22.1524H17.3511C18.6323 22.1524 19.8609 21.6435 20.7668 20.7376C21.6727 19.8317 22.1816 18.603 22.1816 17.3219V7.09266C22.1816 4.42279 20.021 2.26218 17.3511 2.26218H7.12187ZM12.2365 7.041C13.6067 7.041 14.9208 7.5853 15.8896 8.55417C16.8585 9.52304 17.4028 10.8371 17.4028 12.2073C17.4028 13.5775 16.8585 14.8915 15.8896 15.8604C14.9208 16.8293 13.6067 17.3736 12.2365 17.3736C10.8663 17.3736 9.55225 16.8293 8.58338 15.8604C7.61451 14.8915 7.0702 13.5775 7.0702 12.2073C7.0702 10.8371 7.61451 9.52304 8.58338 8.55417C9.55225 7.5853 10.8663 7.041 12.2365 7.041ZM12.2365 8.07426C11.1404 8.07426 10.0891 8.5097 9.314 9.28479C8.53891 10.0599 8.10346 11.1111 8.10346 12.2073C8.10346 13.3034 8.53891 14.3547 9.314 15.1298C10.0891 15.9049 11.1404 16.3403 12.2365 16.3403C13.3327 16.3403 14.3839 15.9049 15.159 15.1298C15.9341 14.3547 16.3695 13.3034 16.3695 12.2073C16.3695 11.1111 15.9341 10.0599 15.159 9.28479C14.3839 8.5097 13.3327 8.07426 12.2365 8.07426Z" stroke="#A43375" stroke-width="1.29157"/>
                                </svg>
                            </Link>
                            <Link to="/">
                                <svg width="20" height="20" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.5805 3.55182C23.2085 3.55182 23.8108 3.80129 24.2549 4.24536C24.6989 4.68942 24.9484 5.2917 24.9484 5.9197V22.4949C24.9484 23.1229 24.6989 23.7252 24.2549 24.1692C23.8108 24.6133 23.2085 24.8628 22.5805 24.8628H6.00534C5.37733 24.8628 4.77505 24.6133 4.33099 24.1692C3.88692 23.7252 3.63745 23.1229 3.63745 22.4949V5.9197C3.63745 5.2917 3.88692 4.68942 4.33099 4.24536C4.77505 3.80129 5.37733 3.55182 6.00534 3.55182H22.5805ZM21.9886 21.9029V15.628C21.9886 14.6044 21.5819 13.6227 20.8581 12.8988C20.1343 12.175 19.1525 11.7684 18.1289 11.7684C17.1226 11.7684 15.9505 12.384 15.3822 13.3075V11.9933H12.079V21.9029H15.3822V16.0661C15.3822 15.1545 16.1162 14.4086 17.0278 14.4086C17.4674 14.4086 17.889 14.5832 18.1999 14.894C18.5107 15.2049 18.6854 15.6265 18.6854 16.0661V21.9029H21.9886ZM8.23115 10.1345C8.75867 10.1345 9.26459 9.92498 9.6376 9.55197C10.0106 9.17895 10.2202 8.67304 10.2202 8.14552C10.2202 7.04445 9.33221 6.14465 8.23115 6.14465C7.70049 6.14465 7.19156 6.35546 6.81632 6.73069C6.44109 7.10593 6.23029 7.61485 6.23029 8.14552C6.23029 9.24658 7.13008 10.1345 8.23115 10.1345ZM9.87683 21.9029V11.9933H6.59731V21.9029H9.87683Z" fill="#A43375"/>
                                </svg>
                            </Link>

                        </div>
                    </div>
                    
                </div>
                <div className="xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-mt-1-half xui-grid-gap-8">
                    <p className="xui-font-sz-85">Quick Links:</p>
                    <Link to='/' className="xui-font-sz-85 xui-text-white xui-text-dc-none">Home</Link>
                    <Link to='/about' className="xui-font-sz-85 xui-text-white xui-text-dc-none">About us</Link>
                    <Link to='tel:+234 567 896 8000' className="xui-font-sz-85 xui-text-white xui-text-dc-none">Book appointment</Link>
                </div>
                <div className="xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-mt-3">
                    <p className="xui-font-sz-80">&copy; 2024 Powered by</p>
                    <Link to='http://grascope.com/' target="_blank"><img src={GrascopeLogo} className="xui-img-80 xui-mx-half" alt="" /></Link>
                    <p className="xui-font-sz-80">All right reserved</p>
                </div>
            </section>
    
        </>
    )
}