import React from 'react';

function Footer() {
    const footerStyle = {
        background: ' linear-gradient(to right, #feac5e, #c779d0, #4bc0c8)',
        color: 'white',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '40rem'
    };


    return (
        <footer style={footerStyle}>
            <p>Copyright © 2023</p>
        </footer>


    );
}

export default Footer;
