import React, { useEffect } from 'react';
import KUTE from 'kute.js';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const Hero = () => {
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
        <section className="relative min-h-[calc(100vh-80px)] overflow-hidden">
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
            <div className="container py-7 grid gap-x-20 gap-y-7 lg:pt-12 lg:pb-20 lg:grid-cols-2 lg:items-center xl:gap-x-40">
                <div className="text-center lg:text-left">
                    <h1 className="mb-5 lg:mb-8">Keeping It All Together</h1>
                    <p className="mb-7 lg:mb-14">
                        Enjoy special design, development & advertising offers
                        from Google, Microsoft Advertising, and other leading
                        sites to help grow your business, - Start Today.
                    </p>

                    <div className="flex flex-col items-center gap-y-4 gap-x-7 lg:items-start xl:flex-row xl:items-center">
                        <Link
                            to="/pricing"
                            className="btn-primary btn--flex py-3 px-6 rounded-[15px] lg:py-5 lg:px-11"
                        >
                            Try for free
                            <i className="ri-arrow-right-s-line"></i>
                        </Link>

                        <span className="text-primary">
                            * No credit card required
                        </span>
                    </div>
                </div>

                <StaticImage
                    src="../../../assets/hero-home.png"
                    className="aspect-square mx-auto md:w-2/3 lg:w-full"
                />
            </div>
        </section>
    );
};

export default Hero;
