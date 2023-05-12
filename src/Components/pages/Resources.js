import React from 'react'
import { useSelector } from 'react-redux';
import Login from './Login';

const Resources = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    if (!isLoggedIn) return <Login />;
    return (
        <div>Resources</div>
    )
}

export default Resources