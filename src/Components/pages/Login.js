import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { login } from '../../Slice/AuthorizationSlice';
import { unstable_HistoryRouter, useNavigate } from 'react-router-dom';
import CreateAccountButton from './utilities/CreateAccount';

function Login(props) {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // TODO: Handle login logic
    };

    const forgotPasswordStyle = {
        marginTop: '0.5rem',
        textAlign: 'right',
        fontSize: '0.9rem',
        color: '#666',
        textDecoration: 'underline',
        cursor: 'pointer',
    };

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '5rem',
    };

    const inputStyle = {
        margin: '1rem',
        padding: '0.5rem',
        borderRadius: '0.25rem',
        border: '1px solid #ddd',
        width: '100%',
        boxSizing: 'border-box',
        fontSize: '1rem',
    };

    const labelStyle = {
        fontWeight: 'bold',
        marginBottom: '0.5rem',
        fontSize: '1rem',
    };

    const buttonStyle = {
        marginTop: '1rem',
        marginBottom: '3rem',
        padding: '0.5rem 2rem',
        borderRadius: '0.25rem',
        border: 'none',
        background: 'linear-gradient(to bottom right, #0077ff, #00bfff)',
        color: 'white',
        fontSize: '1rem',
        cursor: 'pointer',
    };

    let toast_id;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const authenticate = () => {
        if (username && password) {
            sessionStorage.setItem("freshLogin", "true");
            dispatch(login());
            navigate('/');
        } else {
            if (!toast.isActive(toast_id))
                toast_id = toast.error("Incorrect credentials!");
        }
    }

    const signup = () => {
        navigate('/signup');
        console.log("navigating")
    }

    return (
        <div>
            <ToastContainer />
            <h1 style={{ textAlign: 'center' }}>Login Page</h1>
            <form onSubmit={handleSubmit} style={formStyle}>
                <label style={labelStyle}>
                    Username:
                    <input type="text" value={username} onChange={handleUsernameChange} style={inputStyle} />
                </label>
                <label style={labelStyle}>
                    Password:
                    <input type="password" value={password} onChange={handlePasswordChange} style={inputStyle} />
                </label>
                {/* <div style={forgotPasswordStyle}>Forgot your password?</div> */}
                <button type="submit" style={buttonStyle} onClick={authenticate}>Log in</button>
                <CreateAccountButton label="Create new account" onClick={signup} />
                <CreateAccountButton label="Forgot password" />

            </form>
        </div>
    );
}

export default Login;
