import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';


const Root = () => {
    return (
        <>
            {/* <div>Root</div> */}
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Root;