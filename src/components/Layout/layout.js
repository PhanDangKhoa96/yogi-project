import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import '../../styles/global.scss';
import 'remixicon/fonts/remixicon.css';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main className="pt-20">{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
