import React from 'react';

export const MODES = {
    LIGHT: 'light',
    DARK: 'dark',
}

const CallUsNow = ({ mode = MODES.DARK}) => {

    const phoneNumber = 8168652025;

    const handleCall = () => {
        window.location.href = `tel:${phoneNumber}`;
    };

    const containerStyle = `${mode === MODES.LIGHT ? 'bg-white text-primary' : 'bg-primary text-white'}`

    return (
    <button onClick={handleCall} className={`flex items-center space-x-2 py-3 mx-auto text-lg font-medium text-center rounded-md px-7 lg:px-10 lg:py-5 ${containerStyle}`}>
        <svg 
            role="img"
            width="24"
            height="24"
            className="w-5 h-5"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 512 512">
            <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
        </svg>
        <span className="text-center lg:w-auto text-l">+91-{phoneNumber}</span>
    </button>
    );
}

export default CallUsNow;