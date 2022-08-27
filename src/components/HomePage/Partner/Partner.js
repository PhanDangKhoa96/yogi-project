import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Partner = () => {
    return (
        <section className="container py-7">
            <p className="text-center w-2/3 mx-auto mb-5 md:mb-8 lg:mb-12">
                Thousands of teams worldwide are using Hugi
            </p>

            <div className="grid grid-cols-2 gap-5 justify-items-start lg:gap-16 xl:gap-x-32 xl:grid-cols-4">
                <div className=" h-full w-full grid place-items-center">
                    <StaticImage
                        objectFit="contain"
                        src="../../../assets/google.svg"
                        className="w-full"
                        alt="image"
                    />
                </div>
                <div className=" h-full w-full grid place-items-center">
                    <StaticImage
                        objectFit="contain"
                        src="../../../assets/yahoo.svg"
                        className="w-full"
                        alt="image"
                    />
                </div>

                <div className=" h-full w-full grid place-items-center">
                    <StaticImage
                        objectFit="contain"
                        src="../../../assets/microsoft.svg"
                        className="w-full"
                        alt="image"
                    />
                </div>

                <div className=" h-full w-full grid place-items-center">
                    <StaticImage
                        objectFit="contain"
                        src="../../../assets/huawei.svg"
                        className="w-full"
                        alt="image"
                    />
                </div>
            </div>
        </section>
    );
};

export default Partner;
