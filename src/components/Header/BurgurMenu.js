import React from 'react';
import { useSpring, animated } from 'react-spring';

const BurgurMenu = ({ isOpen, setIsOpenMenu }) => {
    const first = useSpring({
        transform: isOpen
            ? 'translate(5px, 32px) rotate(-45deg)'
            : 'translate(2px, 7px) rotate(0deg)'
    });
    const second = useSpring({
        transform: isOpen
            ? 'translate(10px, 4px) rotate(45deg)'
            : 'translate(2px, 19px) rotate(0deg)'
    });
    const third = useSpring({
        transform: isOpen
            ? 'translate(5px, 32px) rotate(-45deg)'
            : 'translate(2px, 31px) rotate(0deg)'
    });

    const toggle = () => {
        setIsOpenMenu(!isOpen);
    };

    return (
        <svg
            onClick={toggle}
            width="40"
            height="32"
            viewBox="0 0 44 44"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-venetian lg:hidden"
        >
            <animated.rect width="40" height="4" rx="2" style={first} />
            <animated.rect width="40" height="4" rx="2" style={second} />
            <animated.rect width="40" height="4" rx="2" style={third} />
        </svg>
    );
};

export default BurgurMenu;
