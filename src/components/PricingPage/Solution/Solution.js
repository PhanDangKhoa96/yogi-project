import { Link } from 'gatsby';
import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Solution = () => {
    return (
        <section className="bg-container-bg pt-[35px] pb-20 xl:pb-[185px]">
            <div className="container text-center md:text-left">
                <div className="grid-container xl:grid-cols-12">
                    <h1 className="xl:col-span-9">
                        Not sure which solution is best for you?
                    </h1>
                </div>

                <div className="grid-container gap-y-10 grid-cols-12">
                    <div className="col-span-12 md:col-span-5 xl:col-span-6">
                        <hr className="mt-[60px] mb-[50px] h-[2px] bg-venetian w-3/5 mx-auto md:ml-0 lg:w-[46%]" />
                        <p className="mb-12">
                            Don’t worry, we can help match you to your perfect
                            brand & product solution in just 30 seconds.
                        </p>

                        <Link to="/" className="btn-primary">
                            Help Me Choose
                        </Link>
                    </div>
                    <div className="overflow-hidden rounded-[12px] aspect-square col-span-12 md:col-span-6 md:col-start-7 xl:col-span-5 xl:col-start-8">
                        <StaticImage
                            src="../../../assets/hero-home.png"
                            alt="image"
                            class="w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solution;
