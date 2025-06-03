import React from 'react';
import { useState, useEffect } from 'react';
import A_logo from "../images/A_logo.jpeg"


const SplashScreen = () => {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);
        }, 2500); // Show splash screen for 3 seconds
        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className={`h-screen w-screen flex flex-col items-center justify-center bg-[#0D2F58] text-white transition-opacity duration-2000 ${
                fadeOut ? 'opacity-0' : 'opacity-100'
            }`}
        >
            <img
                src={A_logo}
                className={`w-20 h-20 rounded-lg mb-6 transition-transform duration-[2000ms] ${
                    fadeOut
                        ? ''
                        : 'animate-spin-scale'
                }`}
                alt="Logo"
            />
            <div className="h-4" /> {/* One line gap */}
            <h1 className="text-4xl font-bold animate-bounce text-center">
                Hello ! Welcome To <br />
                <span className="text-[#00FFC6]">My Portfolio ...</span>
            </h1>
            <style>
                {`
                @keyframes spin-scale {
                    0% {
                        transform: rotate(0deg) scale(0.5);
                    }
                    100% {
                        transform: rotate(360deg) scale(1);
                    }
                }
                .animate-spin-scale {
                    animation: spin-scale 2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
                }
                `}
            </style>
        </div>
    );
};
export default SplashScreen;