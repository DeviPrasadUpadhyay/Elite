import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import { validateEmail, validatePassword, validateText } from './utilities/validator';
import { toast } from 'react-toastify';


const Signup = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [firstNameLog, setFirstNameLog] = useState('');
    const [lastNameLog, setLastNameLog] = useState("");
    const [emailLog, setEmailLog] = useState('');
    const [passwordLog, setPasswordLog] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("=>", firstName, lastName, email, password);
        setFirstNameLog(validateText(firstName));
        setLastNameLog(validateText(lastName));
        setEmailLog(validateEmail(email));
        setPasswordLog(validatePassword(password));
        console.log("=>", firstNameLog, lastNameLog, emailLog, passwordLog)
    };
    const navigate = useNavigate();


    const returnToLogin = () => {
        navigate('/login');

    }
    const errorStyle = {
        color: 'red',
        fontSize: '14px',
        marginTop: '5px',
    };

    return (
        <form onSubmit={handleSubmit} className="signup-form">
            <label htmlFor="first-name">First Name</label>
            <input
                type="text"
                id="first-name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
            />
            {firstNameLog && <p style={errorStyle}>{firstNameLog}</p>}

            <label htmlFor="last-name">Last Name</label>
            <input
                type="text"
                id="last-name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
            />
            {lastNameLog && <p style={errorStyle}>{lastNameLog}</p>}

            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            {emailLog && <p style={errorStyle}>{emailLog}</p>}

            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            {passwordLog && <p style={errorStyle}>{passwordLog}</p>}

            <button type="submit">Sign Up</button>
            <button onClick={returnToLogin}>Back to Login</button>
        </form>
    );
};

export default Signup;
