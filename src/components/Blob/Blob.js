import React, { useEffect } from 'react';
import KUTE from 'kute.js';

const Blob = () => {
    useEffect(() => {
        const tween = KUTE.fromTo(
            '#blob1',
            { path: '#blob1' },
            { path: '#blob2' },
            { repeat: 999, duration: 2500, yoyo: true }
        );

        tween.start();
    }, []);

    return (
        <svg
            id="visual"
            viewBox="0 0 960 540"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            className="absolute h-3/4 top-0 left-0 -translate-x-[50%] -translate-y-1/4 lg:h-full"
        >
            <g transform="translate(518.2711851868296 309.97175888369816)">
                <path
                    id="blob1"
                    d="M75.9 -68.7C93.4 -13.6 99.1 23.5 84.5 54.9C69.9 86.3 34.9 112.2 -15 120.8C-65 129.5 -129.9 121 -155.7 83.1C-181.6 45.2 -168.3 -22.2 -135.8 -85.9C-103.3 -149.7 -51.7 -209.8 -11.2 -203.4C29.2 -196.9 58.5 -123.8 75.9 -68.7"
                    fill="#ff71580d"
                ></path>
            </g>

            <g
                transform="translate(475.7566923248157 284.5891345564467)"
                className="invisible"
            >
                <path
                    id="blob2"
                    d="M152.6 -116.2C167.2 -62.8 127.5 -6.1 93 53.5C58.5 113.1 29.2 175.5 -13.7 183.4C-56.6 191.3 -113.2 144.7 -135.5 92.1C-157.9 39.5 -146.1 -19 -117.8 -80.3C-89.5 -141.7 -44.7 -205.8 12.1 -212.8C69 -219.8 138 -169.7 152.6 -116.2"
                    fill="#ff71580d"
                ></path>
            </g>
        </svg>
    );
};

export default Blob;
