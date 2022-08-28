import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const ContactPage = () => {
    return (
        <section className="bg-container-bg py-8 lg:pt-[70px] lg:pb-[55px]">
            <div className="container px-0 bg-white rounded-[15px] py-[22px] shadow-[0_10px_55px_rgba(241,102,24,0.15)]">
                <div className="container">
                    <div className="grid-container md:grid-cols-12">
                        <div className="w-full h-full md:col-span-6">
                            <StaticImage
                                alt="image"
                                src="../../../assets/hero-home.png"
                                class="rounded-[15px] w-full h-full"
                            />
                        </div>

                        <div className="md:col-span-5 md:col-start-8">
                            <div className="mb-[50px]">
                                <h3 className="mb-2">Contact Us</h3>
                                <p>Questions, bug reports, feedback.</p>
                            </div>

                            <form>
                                <div className="mb-8 w-full">
                                    <label
                                        htmlFor="email"
                                        className="text-venetian/50 font-semibold mb-4 inline-block"
                                    >
                                        Your mail
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full bg-container-bg rounded-[10px] py-5 px-4 text-bittersweet/50 placeholder:text-bittersweet/50"
                                    />
                                </div>

                                <div className="mb-9 w-full">
                                    <label
                                        htmlFor="email"
                                        className="text-venetian/50 font-semibold mb-4 inline-block"
                                    >
                                        Your mail
                                    </label>
                                    <textarea
                                        placeholder="Enter a topic"
                                        className="w-full bg-container-bg rounded-[10px] py-5 px-4 text-bittersweet/50 placeholder:text-bittersweet/50"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="text-white bg-bittersweet w-full py-6 rounded-[15px]"
                                >
                                    Send now
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;
