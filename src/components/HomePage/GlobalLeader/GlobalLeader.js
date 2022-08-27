import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const GlobalLeader = () => {
    return (
        <section className="bg-container-bg py-20">
            <div className="container">
                <div className="grid gap-y-10 gap-x-[93px] lg:grid-cols-[0.44fr_0.67fr]">
                    <div className="text-center lg:text-left lg:mt-[60px]">
                        <h3 className="mb-6">
                            Global leader in Design & Development
                        </h3>
                        <p className="mb-16 w-3/4 mx-auto lg:w-full">
                            The company’s comprehensive security portfolio
                            includes leading endpoint protection and a number of
                            specialized security solutions and services to fight
                            sophisticated and evolving digital threats. Over 400
                            million users are protected by Yogi technologies and
                            we help 250,000 corporate clients protect what
                            matters most to them.
                        </p>
                        <Link
                            to="/"
                            className="btn-primary btn--flex py-5 px-10"
                        >
                            Learn more
                            <i class="ri-arrow-right-s-line"></i>
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-10">
                        <div className="aspect-square">
                            <StaticImage
                                src="../../../assets/global-leader-1.png"
                                alt="image"
                            />
                        </div>
                        <div className="aspect-square ml-5 mt-10 lg:ml-10 lg:mt-20">
                            <StaticImage
                                src="../../../assets/global-leader-2.png"
                                alt="image"
                            />
                        </div>
                        <div className="aspect-square relative mr-3 ml-8 mb-10 lg:mr-5 lg:ml-[60px] lg:mb-20">
                            <div className="absolute aspect-square w-20 bottom-0 left-0 -translate-x-1/2 translate-y-1/2 lg:w-[115px]">
                                <StaticImage
                                    src="../../../assets/dot-pattern.png"
                                    alt="image"
                                />
                            </div>

                            <StaticImage
                                src="../../../assets/global-leader-3.png"
                                alt="image"
                            />
                        </div>
                        <div className="aspect-square mt-7 lg:mt-14">
                            <StaticImage
                                src="../../../assets/global-leader-4.png"
                                alt="image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GlobalLeader;
