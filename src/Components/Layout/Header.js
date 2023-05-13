import React, { useState } from 'react';
import './Header.css';
import { FiZap } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../../Slice/AuthorizationSlice';

function Header(props) {

    const navItems = [
        { name: 'Home', link: '/' },
        { name: 'About', link: '/about' },
        { name: 'Contact', link: '/contact' },
        { name: 'Resources', link: '/resources' },
    ];

    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const authenticate = () => {
        if (isLoggedIn) dispatch(logout());
    };

    return (

        <header>
            <div className="header-content">
                <div className="logo">
                    <Link to="/" style={{
                        color: 'inherit',
                        textDecoration: "none",
                        padding: "0.5rem",
                        borderRadius: "5px"
                    }}>
                        <FiZap /> Elite Edits
                    </Link>
                </div>
                <nav>
                    <ul>
                        {isLoggedIn && navItems.map((item) => (
                            <li key={item.name}>
                                <Link to={item.link}>{item.name}</Link>
                            </li>
                        ))}
                        <li>
                            <Link to={isLoggedIn ? '/logout' : '/login'} onClick={authenticate}>{isLoggedIn ? 'Logout' : 'Login'}</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>

    );
}

export default Header;
