import React from 'react';
import Nav from "../../sections/nav/Nav";
import Footer from "../../sections/footer/Footer";
import {Outlet} from "react-router-dom";

function Layout(props) {
    return (
        <>
            <Nav />
            <Outlet />
            <Footer />
        </>
    );
}

export default Layout;