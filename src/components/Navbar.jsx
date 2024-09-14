/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from 'react';
import { useLocation, NavLink, Link } from 'react-router-dom';
import Logo from "../assets/images/logo.png";
import LinkButton from './LinkButton';
import { ArrowRight } from '@carbon/icons-react';

const Navbar = () => {
    // const location = useLocation();
    // const [navbarColor, setNavbarColor] = useState("transparent");

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (window.scrollY >= 50) {
    //             setNavbarColor("alternative-nav-color");
                
    //         } else {
    //             setNavbarColor("transparent");
    //         }
    //     };

    //     window.addEventListener("scroll", handleScroll);
    //     return () => window.removeEventListener("scroll", handleScroll);
    // });
    
    return (
        <>
        <nav className={`xui-navbar iyd-nav xui-container pd-nav xui-text-black xui-py-1`} brand="true" layout="2" menu="2">
            
            <div className="links" placed="left">
                <div className="brand xui-h-fluid-100">
                    <NavLink className="xui-text-dc-none xui-h-fluid-100 xui-text-inherit xui-d-inline-flex xui-flex-ai-center" to={'/'}>
                        <img className='xui-img-80' src={Logo} alt="" />
                        {/* <span className="xui-ml-half xui-d-inline-block xui-font-1 xui-font-w-bold">Kathy</span> */}
                    </NavLink>
                </div>

                <div className="main dark-color primary xui-bg-white">
                    <ul>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'xui-font-sz-150 nav-links xui-md-font-sz-200 xui-lg-font-sz-100 xui-font-w-bold bold-font' : 'xui-font-sz-150 nav-links xui-md-font-sz-200 xui-lg-font-sz-100 xui-font-w-normal xui-text-black'} to={"/"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'xui-font-sz-150 nav-links xui-md-font-sz-200 xui-lg-font-sz-100 xui-font-w-bold bold-font' : 'xui-font-sz-150 nav-links xui-md-font-sz-200 xui-lg-font-sz-100 xui-font-w-normal xui-text-black'} to={"about"}>About us</NavLink>
                        </li>
                        {/* <li>
                            <NavLink className="xui-font-sz-150 nav-links xui-md-font-sz-200 xui-lg-font-sz-100 xui-font-w-bold xui-text-inherit" smooth to={"/#benefits"}>Book appointment</NavLink>
                        </li> */}
                     
                    </ul>
                </div>
                <div className="fixed">
                    <ul>
                        <li>
                            <Link className='contact' to={"https://wa.me/2347030218746"}>
                                <p className='spa-text-purple xui-mr-3 bold-font xui-lg-d-block xui-md-d-block xui-d-none'>Contact us</p>
                                <span>
                                    <ArrowRight size={19.2} />
                                </span>
                            </Link>
                            {/* <LinkButton text="Contact Us" route="tel:+234 567 896 8000" customClass="xui-bdr-rad-3" /> */}
                            {/* <BtnCustomI onClick={scrollToContainer("contact")} href="./" text="Book free consultation" mobileText="Book Now" layout="iv"></BtnCustomI> */}
                        </li>
                    </ul>
                </div>
                <div className="menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
        </>
    )
};

export default Navbar;