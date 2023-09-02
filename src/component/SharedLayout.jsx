import React from "react";
import { Outlet } from "react-router-dom"; 
import NavBar from "./navbar";
import Footer from "./Footer";

function SharedLayout(){
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    )
}

export default SharedLayout