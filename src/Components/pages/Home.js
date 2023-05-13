import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Login from './Login';
import { ToastContainer, toast } from 'react-toastify';
import Signup from './Signup';

let toast_id;
function Home() {
    const pageTitleStyle = {
        fontSize: '3rem',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: '5rem',
    };

    const sectionStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5rem',
    };

    const imageStyle = {
        width: '50%',
        borderRadius: '0.25rem',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    };

    const contentStyle = {
        width: '50%',
        marginLeft: '3rem',
    };

    const titleStyle = {
        fontSize: '2rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
    };

    const descriptionStyle = {
        fontSize: '1.2rem',
        lineHeight: '1.5',
    };

    useEffect(() => {
        if (sessionStorage.getItem("freshLogin") === "true") {
            if (!toast.isActive(toast_id))
                toast_id = toast("Logged in successfully");
            sessionStorage.clear();
        }
    }, [sessionStorage.getItem("freshLogin")]);
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    if (!isLoggedIn) return <Login />;

    return (
        <div>
            <Signup />
            <ToastContainer />
            <h1 style={pageTitleStyle}>Welcome to this awesome land of reels</h1>
            <section style={sectionStyle}>
                <img src={"https://as1.ftcdn.net/v2/jpg/03/78/85/18/1000_F_378851810_GwZY8KGQaw1ikbz3rqnjbs2DMNvfjUHp.jpg"} alt="Placeholder" style={imageStyle} />
                <div style={contentStyle}>
                    <h2 style={titleStyle}>Elite Edits team...</h2>
                    <p style={descriptionStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id elit id orci tincidunt mollis. Aliquam sed ante ligula. Curabitur id nibh vitae odio euismod euismod vitae eget lectus. Duis bibendum massa eget sapien pharetra, id sollicitudin lorem auctor. Nam faucibus, dolor ut aliquet feugiat, purus elit elementum quam, sit amet congue urna eros non lorem.</p>
                </div>
            </section>
        </div>
    );
}

export default Home;
