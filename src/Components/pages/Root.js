import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import { useSelector } from 'react-redux';


const Root = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    return (
        <>
            {/* <div>Root</div> */}
            <Header />
            <Outlet />
            {isLoggedIn && <Footer />}
        </>
    )
}

export default Root;