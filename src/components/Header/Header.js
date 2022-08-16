import { Link } from 'gatsby';
import React, { useRef, useState } from 'react';
import BurgurMenu from './BurgurMenu';
import { useEffect } from 'react';
import { useLocation } from '@reach/router';

const Header = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const header = useRef(null);
    const location = useLocation();

    // change style menu when scroll and set default height for menu
    useEffect(() => {
        window.addEventListener('scroll', () => {
            const scrollY = window.pageYOffset;

            if (scrollY > 50) {
                header.current.classList.add('shadow-md', 'fixed');
                header.current.classList.remove('absolute');
            } else {
                header.current.classList.remove('shadow-md', 'fixed');
                header.current.classList.add('absolute');
            }
        });
    }, []);

    // hide menu when change page
    useEffect(() => {
        setIsOpenMenu(false);
    }, [location]);

    return (
        <>
            <header
                className="bg-white absolute w-full top-0 left-0 transition-all duration-300 h-20 z-20"
                ref={header}
            >
                <ul
                    className={`flex flex-col absolute top-full w-full left-0 bg-white gap-4 shadow-lg p-4 border border-solid border-gray-200 z-20 transition-all duration-300 lg:hidden ${
                        isOpenMenu
                            ? 'translate-y-0 opacity-1'
                            : '-translate-y-full opacity-0'
                    }`}
                >
                    <li>
                        <Link
                            to="/blog"
                            className={`font-semibold  text-base hover:text-primary transition duration-500 lg:text-lg ${
                                location?.pathname === '/blog'
                                    ? 'text-primary'
                                    : 'text-text-light'
                            }`}
                        >
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/pricing"
                            className={`font-semibold  text-base hover:text-primary transition duration-500 lg:text-lg ${
                                location?.pathname === '/pricing'
                                    ? 'text-primary'
                                    : 'text-text-light'
                            }`}
                        >
                            Pricing
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className={`font-semibold  text-base hover:text-primary transition duration-500 lg:text-lg ${
                                location?.pathname === '/about'
                                    ? 'text-primary'
                                    : 'text-text-light'
                            }`}
                        >
                            About us
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            className={`font-semibold  text-base hover:text-primary transition duration-500 lg:text-lg ${
                                location?.pathname === '/contact'
                                    ? 'text-primary'
                                    : 'text-text-light'
                            }`}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
                <div className="container flex justify-between py-4 items-center  fixed z-[1000] top-0 left-1/2 -translate-x-1/2">
                    <Link to="/">
                        <h1 className="text-primary font-bold text-4xl lg:text-5xl">
                            Yogi
                        </h1>
                    </Link>

                    <nav className="flex flex-row-reverse items-center gap-x-4">
                        <BurgurMenu
                            isOpen={isOpenMenu}
                            setIsOpenMenu={setIsOpenMenu}
                        />

                        <div className="flex gap-x-7">
                            <Link
                                to="/login"
                                className="p-3 text-sm font-semibold lg:text-base"
                            >
                                Login
                            </Link>
                            <Link
                                to="/register"
                                className="py-3 px-5 text-white bg-bg-black rounded-md text-sm lg:text-base lg:px-10"
                            >
                                Sign up
                            </Link>
                        </div>

                        <ul className="hidden gap-x-12 pr-7 mr-7 border-r border-solid border-gray-200 lg:flex">
                            <li>
                                <Link
                                    to="/blog"
                                    className={`font-semibold  text-base hover:text-primary transition duration-500 lg:text-lg ${
                                        location?.pathname === '/blog'
                                            ? 'text-primary'
                                            : 'text-text-light'
                                    }`}
                                >
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/pricing"
                                    className={`font-semibold  text-base hover:text-primary transition duration-500 lg:text-lg ${
                                        location?.pathname === '/pricing'
                                            ? 'text-primary'
                                            : 'text-text-light'
                                    }`}
                                >
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    className={`font-semibold  text-base hover:text-primary transition duration-500 lg:text-lg ${
                                        location?.pathname === '/about'
                                            ? 'text-primary'
                                            : 'text-text-light'
                                    }`}
                                >
                                    About us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className={`font-semibold  text-base hover:text-primary transition duration-500 lg:text-lg ${
                                        location?.pathname === '/contact'
                                            ? 'text-primary'
                                            : 'text-text-light'
                                    }`}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            {isOpenMenu && (
                <div
                    className="fixed inset-0 z-10"
                    onClick={() => {
                        setIsOpenMenu(false);
                    }}
                ></div>
            )}
        </>
    );
};

export default Header;
