import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import { validateEmail, validatePassword, validateText } from './utilities/validator';
import { ToastContainer, toast } from 'react-toastify';
import { addUser, getUsers, writeUserData } from '../../firebase/Firebase';


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

        if (!(validateText(firstNameLog) && validateText(lastNameLog) && validateEmail(emailLog) && validatePassword(passwordLog))) {
            return;
        }
        const user = {
            firstName,
            lastName,
            email,
            password
        };


        let existingUsers = [];
        getUsers().then(data => {
            console.log("data : ", data);
            existingUsers = [...data];
            console.log("existingUsers : ", existingUsers);
            const idx = existingUsers.find(e =>
                e.firstName == user.firstName &&
                e.lastName == user.lastName &&
                e.password == user.password &&
                e.email == user.email
            );
            if (idx && idx !== -1 && existingUsers.length > 0) {
                console.log("user already present");
                toast("You are already an user.")
            } else {
                console.log("NOT present")
                addUser(user);
                toast("You have successfully registered, we sent you an verification email, the last step to get started !!")
            }
        })
        // console.log("=> get ", getUsers())
        // TODO: make firebase app work 
        // writeUserData("aadisupersonic", "aadi", "aadisupersonic@gmail.com", "imageOfAadi.com").then(() => {
        //     console.log("written successfully");
        // }).catch(() => {
        //     console.log("failed writing");
        // });
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
            <ToastContainer />
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
