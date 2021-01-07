import React from 'react';
import './Button.css';

const Button =  (props) => {
    return <button type = "submit" className = "btn" onClick = {props.onClick}> Sign In with Email </button>
}

export default Button;