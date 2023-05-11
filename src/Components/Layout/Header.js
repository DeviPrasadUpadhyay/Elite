import React, { useState } from 'react';
import './Header.css';
import { FiZap } from 'react-icons/fi';

function Header() {
    const navItems = [
        { name: 'Home', link: '/' },
        { name: 'About', link: '/about' },
        { name: 'Contact', link: '/contact' },
        { name: 'Resources', link: '/resources' },
    ];

    // You can set up the login/logout button to appear conditionally depending on user authentication
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const authenticate = () => {
        setIsLoggedIn(!isLoggedIn);
    };

    return (
        <header>
            <div className="header-content">
                <div className="logo">
                    <a href="/" style={{
                        color: 'inherit',
                        "text-decoration": "none",
                        padding: "0.5rem",
                        "border-radius": "5px"
                    }}>
                        <FiZap /> Elite Edits</a></div>
                <nav>
                    <ul>
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <a href={item.link}>{item.name}</a>
                            </li>
                        ))}
                        <li>
                            <a href={isLoggedIn ? '/logout' : '/login'} onClick={authenticate}>{isLoggedIn ? 'Logout' : 'Login'}</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
