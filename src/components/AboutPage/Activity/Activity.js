import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import './Activity.scss';

const Card = ({ title, description, date }) => {
    return (
        <div className="card flex flex-col justify-between bg-white rounded-[15px] py-5 px-[25px]">
            <div>
                <div className="mb-[13px] w-full aspect-square">
                    <StaticImage
                        alt="image"
                        src="../../../assets/hero-home.png"
                        class="rounded-[6px] w-full h-full"
                    />
                </div>

                <h4 className="mb-3">{title}</h4>
                <span className="block text-lg mb-[51px] lg:text-xl">
                    {description}
                </span>
            </div>

            <p className="mt-auto text-sm lg:text-base">{date}</p>
        </div>
    );
};

const Activity = () => {
    return (
        <section className="bg-container-bg pt-10 pb-20 lg:pt-[60px] lg:pb-[114px]">
            <div className="container">
                <h3 className="mb-[72px] text-center">
                    What’s happening at Yogi?
                </h3>

                <div className="grid-container md:grid-cols-3">
                    <Card
                        title="Awards"
                        description="See product evaluations from third-party analysts."
                        date="8 September, 2019"
                    />
                    <Card
                        title="Works"
                        description="Inclusion at McAfee is about the power of working together and creating a culture where all voices are valued."
                        date="8 September, 2019"
                    />
                    <Card
                        title="Awards"
                        description="See product evaluations from third-party analysts."
                        date="8 September, 2019"
                    />
                </div>
            </div>
        </section>
    );
};

export default Activity;
