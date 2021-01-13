import React from 'react';

import './Input.css';

const Input = (props) => {
    const {type,value,onChange, placeholder} = props;
    return (
        <input  
            className = "pass"
            type={type} 
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    )    
}   

export default Input;