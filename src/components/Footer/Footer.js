import { Link } from 'gatsby';
import React, { useRef, useState } from 'react';
import { animated, useSpring } from 'react-spring';
import useOutsideClick from './../../hooks/useOutsideClick';

const Footer = () => {
    const dropdown = useRef(null);
    const [isDropdown, setIsDropdown] = useState(false);
    const toggleDropdown = () => {
        setIsDropdown(!isDropdown);
    };
    const dropdownAnimation = useSpring({
        opacity: isDropdown ? 1 : 0,
        transform: isDropdown ? 'translateY(0)' : 'translateY(-40px)',
        loop: true
    });
    useOutsideClick(dropdown, isDropdown, setIsDropdown);

    return (
        <section className="pb-10 pt-9 lg:pt-[70px] lg:pb-20">
            <div className="container">
                <div className="mb-[92px] flex flex-col-reverse items-start gap-y-12 gap-x-10 sm:flex-row sm:justify-between">
                    <div className="flex flex-col gap-y-10 sm:flex-row sm:flex-wrap sm:gap-x-28">
                        <div>
                            <h5 className="mb-9">Company</h5>
                            <div className="text-bittersweet font-semibold grid gap-y-[18px]">
                                <Link to="/">About Us</Link>
                                <Link to="/">About Us</Link>
                                <Link to="/">About Us</Link>
                                <Link to="/">About Us</Link>
                            </div>
                        </div>

                        <div>
                            <h5 className="mb-9">Contact</h5>
                            <div className="text-bittersweet font-semibold grid gap-y-[18px]">
                                <Link to="/">Terms of Use</Link>
                                <Link to="/">Privace Policy</Link>
                                <Link to="/">F.A.Q</Link>
                            </div>
                        </div>

                        <div>
                            <h5 className="mb-9">Contact</h5>
                            <div className="text-bittersweet font-semibold grid gap-y-[18px]">
                                <Link to="/">Terms of Use</Link>
                                <Link to="/">Privace Policy</Link>
                                <Link to="/">F.A.Q</Link>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div
                            className={`flex items-center justify-between p-[14px] font-medium shadow-[0_10px_20px_rgba(241,102,24,0.15)] rounded-lg gap-x-[77px]  ${
                                isDropdown
                                    ? 'pointer-events-none'
                                    : 'cursor-pointer'
                            }`}
                            onClick={toggleDropdown}
                        >
                            <span>Global</span>
                            <i class="ri-arrow-down-s-line text-bittersweet "></i>
                        </div>

                        <animated.ul
                            className={`absolute top-[calc(100%+10px)] w-full font-medium rounded-lg shadow-[0_10px_20px_rgba(241,102,24,0.15)] bg-white ${
                                !isDropdown && 'hidden'
                            }`}
                            style={dropdownAnimation}
                            ref={dropdown}
                        >
                            <li className="p-[14px]">Global</li>
                            <li className="p-[14px]">Local</li>
                            <li className="p-[14px]">National</li>
                            <li className="p-[14px]">Regional</li>
                        </animated.ul>
                    </div>
                </div>

                <div className="pt-10 border-t-[2px] border-solid border-venetian flex justify-between items-center">
                    <span className="font-bold">© 2021 Yogi.com</span>
                    <ul className="flex gap-x-4 sm:gap-x-[26px] text-2xl">
                        <li>
                            <a
                                href="/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i class="ri-facebook-fill"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i class="ri-twitter-fill"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i class="ri-instagram-line"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i class="ri-youtube-fill"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Footer;
