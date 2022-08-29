import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const BlogCard = () => {
    return (
        <div className="bg-white rounded-[15px] p-5 flex flex-col">
            <div className="mb-9 overflow-hidden rounded-[15px] w-full aspect-[367/490]">
                <StaticImage
                    src="../../../assets/hero-home.png"
                    className="w-full h-full"
                    alt="image"
                />
            </div>

            <div>
                <p className="mb-7">October 17, 2021</p>
                <h4 className="text-2xl mb-8 lg:!text-[30px]">
                    Andy and his dream to be Astronaut
                </h4>
                <p className="line-clamp-4">
                    Short descriptip /summary of the blog will go here.... lorem
                    isum lorem isum lorem isum lorem isum lorem isum lorem isum
                    lorem isum lorem
                </p>
            </div>
        </div>
    );
};

export default BlogCard;
