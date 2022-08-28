import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Blob from './../../Blob/Blob';

const Hero = () => {
    return (
        <section className="relative pt-10 pb-20 overflow-hidden">
            <Blob />

            <div className="container">
                <div className="grid-container xl:grid-cols-12 xl:items-center">
                    <div className="text-center xl:col-span-5 xl:text-left ">
                        <h1 className="mb-5">About Yogi</h1>
                        <p className="mb-[31px] md:w-2/3 md:mx-auto xl:w-full">
                            We free and empower consumers and families to
                            confidently enjoy life online.
                        </p>
                        <Link to="/" className="btn-primary">
                            Corporate Fact Sheet
                        </Link>
                    </div>
                    <div className="relative md:w-2/3 md:mx-auto xl:w-full xl:col-span-6 xl:col-start-7">
                        <div className="absolute bottom-0 left-0 -translate-x-[calc(2/5*100%)] translate-y-1/3 w-10 aspect-square md:w-20 lg:w-[115px]">
                            <StaticImage
                                alt="image"
                                src="../../../assets/dot-pattern.png"
                                class="w-full h-full"
                            />
                        </div>

                        <StaticImage
                            alt="image"
                            src="../../../assets/hero-home.png"
                            class="rounded-[15px] w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
