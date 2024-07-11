import React from 'react';
import { Link } from 'react-router-dom';

const LinkButton = (props) => {
    const { route, text, customClass, isButton, customStyle } = props;
    return (
        <>
            {
            !isButton ? <Link to={route} className={`spa-bg-purple xui-text-white xui-font-sz-85 ${customClass}`}>{text}</Link>
            : <button type='submit' style={customStyle} className={`spa-bg-purple xui-text-white xui-font-sz-85 ${customClass}`}>{text}</button>
            }
        </>
        
    );
};

export default LinkButton;