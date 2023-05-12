import React from 'react'
import Login from './Login';
import { useSelector } from 'react-redux';

const Contact = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    if (!isLoggedIn) return <Login />;
    return (
        <div>Contact</div>
    )
}

export default Contact