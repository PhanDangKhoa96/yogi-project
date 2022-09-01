import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const BlogPost = () => {
    return (
        <section className="bg-container-bg pt-12 pb-20 lg:pb-[108px] lg:pt-[75px]">
            <div className="container">
                <div className="mb-20 text-center lg:mb-28">
                    <h3 className="mb-5">Yogi Blog Post</h3>
                    <p>
                        Shop, stream, bank and browse the web design & dev. by
                        an industry-leader for all your devices.
                    </p>
                </div>

                <div>
                    <div className="p-5 rounded-2xl bg-white mb-9">
                        <div className=" w-full">
                            <StaticImage
                                alt="image"
                                src="../../../assets/hero-home.png"
                                class="rounded-[15px] aspect-[1279/624] w-full h-full"
                            />
                        </div>
                    </div>

                    <div className="grid-container gap-y-16 items-baseline grid-cols-12">
                        <div className="col-span-10 col-start-2 lg:col-span-8 lg:col-start-1">
                            <span className="text-xl mb-4 lg:text-[28px] block">
                                October 18, 2021
                            </span>
                            <h2 className="mb-12">
                                Andy and his dream to be Astronaut
                            </h2>
                            <span className="text-xl whitespace-pre-wrap lg:text-[28px] block mb-20 leading-normal lg:mb-0">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Consectetur donec eget sed
                                suspendisse ut maecenas facilisi sollicitudin.
                                Egestas dolor sed magna nec, tortor. Quis risus
                                sed nunc, feugiat. Sit diam gravida diam sit
                                arcu. Congue auctor felis aliquet nulla enim
                                ultricies ac sapien. Eu bibendum id et facilisis
                                felis, ultricies iaculis nulla senectus. Nisl
                                neque, sem in erat varius commodo. Enim amet
                                ullamcorper ac enim ante justo a justo. Ut elit
                                in nec vulputate. . Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Consectetur donec
                                eget sed suspendisse ut maecenas facilisi
                                sollicitudin. Egestas dolor sed magna nec,
                                tortor. Quis risus sed nunc, feugiat. Sit diam
                                gravida diam sit arcu. eugiat. Sit diam gravida
                                diam sit arcu. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Consectetur donec
                                eget sed suspendisse ut maecenas facilisi
                                sollicitudin. Egestas dolor sed magna nec,
                                tortor. Quis risus sed nunc, feugiat. Sit diam
                                gravida diam sit arcu. eugiat. Sit diam gravida
                                diam sit arcu. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Consectetur donec
                                eget sed suspendisse ut maecenas facilisi
                                sollicitudin. Egestas dolor sed magna nec,
                                tortor. Quis risus sed nunc, feugiat. Sit diam
                                gravida diam sit arcu. eugiat. Sit diam gravida
                                diam sit arcu.
                            </span>

                            <div className="text-center mb-10 lg:hidden">
                                <Link to="/" className="btn-primary">
                                    Read More
                                </Link>
                            </div>
                        </div>
                        <div className="col-span-10 col-start-2 bg-white text-lg text-black font-['Raleway'] rounded-[15px] shadow-[0_10px_55px_rgba(241,102,24,0.15)] py-9 px-11 grid gap-y-9 lg:text-xl lg:col-span-4 lg:col-start-9">
                            <div className="">
                                <span className="font-light block">
                                    October 17, 2021
                                </span>
                                <span className="font-bold block">
                                    Andy and his dream to be Astronaut
                                </span>
                            </div>

                            <div className="">
                                <span className="font-light block">
                                    October 17, 2021
                                </span>
                                <span className="font-bold block">
                                    Andy and his dream to be Astronaut
                                </span>
                            </div>

                            <div className="">
                                <span className="font-light block">
                                    October 17, 2021
                                </span>
                                <span className="font-bold block">
                                    Andy and his dream to be Astronaut
                                </span>
                            </div>

                            <div className="">
                                <span className="font-light block">
                                    October 17, 2021
                                </span>
                                <span className="font-bold block">
                                    Andy and his dream to be Astronaut
                                </span>
                            </div>

                            <div className="">
                                <span className="font-light block">
                                    October 17, 2021
                                </span>
                                <span className="font-bold block">
                                    Andy and his dream to be Astronaut
                                </span>
                            </div>
                        </div>

                        <div className="text-center hidden mt-9 lg:block lg:col-span-12">
                            <Link to="/" className="btn-primary">
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogPost;
