import React, { useEffect } from 'react';

import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { useLocation } from '@reach/router';
import Blob from './../../Blob/Blob';

const Hero = () => {
    const { pathname } = useLocation();

    return (
        <section className="relative min-h-[calc(100vh-80px)] overflow-hidden">
            <Blob />
            <div className="container relative py-7 grid gap-x-20 gap-y-7 lg:pt-12 lg:pb-20 lg:grid-cols-2 lg:items-center xl:gap-x-40">
                <div className="text-center lg:text-left">
                    {pathname === '/pricing' && (
                        <div className="inline-block mb-[14px] bg-bittersweet text-white font-semibold rounded-[10px] py-[14px] px-[60px]">
                            Monthly Assistance - Get upto 40% off
                        </div>
                    )}
                    <h1 className="mb-5 lg:mb-8">Keeping It All Together</h1>
                    <p className="mb-7 lg:mb-14">
                        Enjoy special design, development & advertising offers
                        from Google, Microsoft Advertising, and other leading
                        sites to help grow your business, - Start Today.
                    </p>

                    {pathname === '/' && (
                        <div className="flex flex-col items-center gap-y-4 gap-x-7 lg:items-start xl:flex-row xl:items-center">
                            <Link
                                to="/pricing"
                                className="btn-primary btn--flex rounded-[15px]"
                            >
                                Try for free
                                <i className="ri-arrow-right-s-line"></i>
                            </Link>
                            <span className="text-primary">
                                * No credit card required
                            </span>
                        </div>
                    )}
                </div>

                <StaticImage
                    src="../../../assets/hero-home.png"
                    className="aspect-square mx-auto md:w-2/3 lg:w-full"
                    alt="image"
                />
            </div>
        </section>
    );
};

export default Hero;
