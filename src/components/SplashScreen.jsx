import React from 'react';
import { useState, useEffect } from 'react';


const SplashScreen = () => {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);
        }, 3000); // Show splash screen for 3 seconds
        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className={`h-screen w-screen flex items-center justify-center bg-[#0D2F58] text-white transition-opacity duration-2000 ${
                fadeOut ? 'opacity-0' : 'opacity-100'
            }`}
        >
            <h1 className="text-4xl font-bold animate-bounce">Hello ! Welcome To <br /> My Portfolio ...</h1>
        </div>
    );
};
export default SplashScreen;