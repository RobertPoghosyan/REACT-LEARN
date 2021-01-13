import React from 'react';

import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';

import './Signup.scss';

const Signup = ()=>{
    return (
        <div>
            <Input type = "email"  className="log" placeholder = "email" />
            <Input type = "password"   className = "pass" placeholder = "password" />
            <Button> SIGNUP </Button>
        </div>
    )
}

export default Signup;