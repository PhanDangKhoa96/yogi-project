import React from 'react';
import BlogListing from '../../components/BlogListing/BlogListing';

const BlogPage = () => {
    return (
        <section className="bg-container-bg pt-9 pb-16 lg:pt-[75px] lg:pb-[120px]">
            <div className="text-center mb-20 container lg:mb-[130px]">
                <h3 className="mb-5">Yogi Blog</h3>
                <p>
                    Shop, stream, bank and browse the web design & dev. by an
                    industry-leader for all your devices.
                </p>
            </div>

            <BlogListing />
        </section>
    );
};

export default BlogPage;
