import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { login } from '../../Slice/AuthorizationSlice';

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
        'text-decoration': 'underline',
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
        padding: '0.5rem 1rem',
        borderRadius: '0.25rem',
        border: 'none',
        background: 'linear-gradient(to right, #0099ff, #0f9900)',
        color: 'white',
        fontSize: '1rem',
        cursor: 'pointer',
    };

    const dispatch = useDispatch();
    // toast.success("Logged in successfully");

    let toast_id;
    const authenticate = () => {
        if (username && password) {
            toast("Logged in successfully!!");
            console.log("logged in successfully!!");
            dispatch(login());
            sessionStorage.setItem("freshLogin", "true");
        } else {
            console.log("incorrect username or password");
            if (!toast.isActive(toast_id))
                toast_id = toast.error("Incorrect username or password !!");

        }

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
                <div style={forgotPasswordStyle}>Forgot your password?</div>
                <button type="submit" style={buttonStyle} onClick={authenticate}>Log in</button>
            </form>
        </div>
    );
}

export default Login;
