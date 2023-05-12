import React from 'react'
import { useSelector } from 'react-redux';
import Login from './Login';

const About = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    if (!isLoggedIn) return <Login />;
    return (
        <div>About</div>
    )
}

export default About;