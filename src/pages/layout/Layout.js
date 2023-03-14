import React from 'react';
import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";
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