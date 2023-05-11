import React, { useState } from 'react';
import './Header.css';
import { FiZap } from 'react-icons/fi';
import { Link } from 'react-router-dom';


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
                <div className="logo"></div>
                <Link to="/" style={{
                    color: 'inherit',
                    "text-decoration": "none",
                    padding: "0.5rem",
                    "border-radius": "5px"
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
        </header >

    );
}

export default Header;
