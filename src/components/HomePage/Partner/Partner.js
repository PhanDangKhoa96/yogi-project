import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Partner = () => {
    return (
        <section className="container py-7">
            <p className="text-center w-2/3 mx-auto mb-5 md:mb-8 lg:mb-12">
                Thousands of teams worldwide are using Hugi
            </p>

            <div className="flex flex-wrap gap-5 justify-center lg:gap-16 xl:gap-x-32">
                <div className="w-[calc((100%-20px)/2)] lg:w-[calc((100%-3*64px)/4)] xl:w-[calc((100%-3*128px)/4)] text-center">
                    <StaticImage
                        objectFit="contain"
                        src="../../../assets/google.svg"
                        className="w-full"
                    />
                </div>
                <div className="w-[calc((100%-20px)/2)] lg:w-[calc((100%-3*64px)/4)] xl:w-[calc((100%-3*128px)/4)] text-center">
                    <StaticImage
                        objectFit="contain"
                        src="../../../assets/yahoo.svg"
                        className="w-2/3 lg:w-full"
                    />
                </div>

                <div className="w-[calc((100%-20px)/2)] lg:w-[calc((100%-3*64px)/4)] xl:w-[calc((100%-3*128px)/4)] text-center">
                    <StaticImage
                        objectFit="contain"
                        src="../../../assets/microsoft.svg"
                        className="w-2/3 lg:w-full"
                    />
                </div>

                <div className="w-[calc((100%-20px)/2)] lg:w-[calc((100%-3*64px)/4)] xl:w-[calc((100%-3*128px)/4)] text-center">
                    <StaticImage
                        objectFit="contain"
                        src="../../../assets/huawei.svg"
                        className="w-2/3 lg:w-full"
                    />
                </div>
            </div>
        </section>
    );
};

export default Partner;
