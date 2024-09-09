import React from 'react';

const SectionDuplicate = (props) => {
    const { paragraphHeading, mainHeading, mainParagraph, children, customClass, isAutoMargin } = props;
    return (
        <div className={`${customClass}`}>
            <p className='xui-font-sz-85 spa-text-purple'>{paragraphHeading}</p>
            <h3 className='bold-font xui-font-w-500 xui-font-sz-200'>{mainHeading}</h3>
            <p className={`xui-opacity-8 xui-lg-w-fluid-80 xui-w-fluid-100 xui-line-height-1-half xui-font-sz-85 xui-mt-half ${isAutoMargin ? 'xui-mx-auto' : ''}`}>{mainParagraph}</p>
            {children}
        </div>
    );
};

export default SectionDuplicate;