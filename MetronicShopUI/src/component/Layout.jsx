import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Fragment } from "react";
import { Outlet,  useNavigate } from "react-router-dom";
import CartButton from "./CartButton";
export default function Layout () {

    const navigat = useNavigate();
    const user = JSON.parse(sessionStorage.getItem("nickname"));
        useEffect( () => {
        user ?  navigat('/product') : navigat('/login') ;
    },[]);    

    return(
        <Fragment>
            <Header />
                <Outlet></Outlet>
            <Footer />
            <CartButton></CartButton>
        </Fragment>
    );

}