import { Link } from 'gatsby';
import React from 'react';

const Service = () => {
    return (
        <section className="bg-bittersweet rounded-[25px] py-12 lg:py-24">
            <div className="container grid lg:grid-cols-12">
                <div className="text-center col-span-12 text-white lg:col-span-8 lg:col-start-3">
                    <h3 className="mb-9">
                        Digital Branding & Product Design & Services by a Global
                        Leader.
                    </h3>

                    <p className="mb-9 text-white">
                        With our advanced technology, you can enjoy a safe and
                        private Internet experience without compromising the
                        performance of your computer and mobile devices.{' '}
                    </p>

                    <Link
                        to="/"
                        className="bg-white font-bold inline-block text-black rounded-[15px] px-7 py-5"
                    >
                        Try for free
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Service;
