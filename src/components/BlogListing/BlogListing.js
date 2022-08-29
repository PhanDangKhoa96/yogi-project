import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import BlogCard from '../BlogCard/BlogCard';

const BlogListing = () => {
    return (
        <div className="container">
            <div className="p-5 grid bg-white mb-[62px] rounded-2xl items-center gap-x-9 gap-y-8 md:grid-cols-[5.8fr_4.2fr]">
                <div className="aspect-square h-full overflow-hidden w-full rounded-[15px] md:aspect-[696/550]">
                    <StaticImage
                        src="../../../assets/hero-home.png"
                        className="w-full h-full"
                        alt="image"
                    />
                </div>

                <div>
                    <p className="mb-5">October 18, 2021</p>
                    <h2 className="mb-9">Andy and his dream to be Astronaut</h2>
                    <p className="mb-[60px]">
                        Short descriptip/summary of the blog will go here.
                        adipiscing elit. Ultrices nisi, habitant velit sit. Amet
                        suspendisse consequat, quis egestas turpis. Sagittis
                        lectus.
                    </p>
                    <Link
                        to="/"
                        className=" btn-primary !bg-venetian btn--flex font-medium"
                    >
                        Read More
                        <i className="ri-arrow-right-s-line"></i>
                    </Link>
                </div>
            </div>
            <div className="grid gap-x-5 mb-14 gap-y-8 grid-cols-2 lg:mb-[120px] lg:grid-cols-3">
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>

            <button className="btn-primary !block mx-auto">Load More</button>
        </div>
    );
};

export default BlogListing;
