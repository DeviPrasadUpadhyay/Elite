import React from 'react';
import './CreateAccount.css';

const CreateAccountButton = (props) => {
    // console.log(props.label)
    return (
        <button className="create-account-button" onClick={props.onClick}>
            {props.label}
        </button>
    );
};

export default CreateAccountButton;
