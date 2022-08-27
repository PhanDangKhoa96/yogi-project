import React from 'react';
import Hero from './../components/HomePage/Hero/Hero';
import Partner from './../components/HomePage/Partner/Partner';
import Pricing from './../components/HomePage/Pricing/Pricing';
import User from './../components/HomePage/User/User';
import GlobalLeader from './../components/HomePage/GlobalLeader/GlobalLeader';
import Service from './../components/HomePage/Service/Service';

const HomePage = () => {
    const components = {
        hero: Hero,
        partner: Partner,
        pricing: Pricing,
        user: User,
        globalLeader: GlobalLeader,
        service: Service
    };

    return (
        <>
            {Object.keys(components).map((key, index) => {
                const Component = components[key];
                return <Component key={key + index} />;
            })}
        </>
    );
};

export default HomePage;
