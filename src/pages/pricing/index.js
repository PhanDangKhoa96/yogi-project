import React from 'react';
import Pricing from './../../components/HomePage/Pricing/Pricing';
import Solution from '../../components/PricingPage/Solution/Solution';
import Hero from './../../components/HomePage/Hero/Hero';

const PricingPage = () => {
    return (
        <>
            <Hero />
            <Pricing />
            <Solution />
        </>
    );
};

export default PricingPage;
