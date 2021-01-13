import React from 'react';

import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';

import './Login'

const Login = ()=>{
    return (
        <div>
            <Input type = "email"  className="log" placeholder = "email" />
            <Button> LOGIN WITH EMAIL </Button>
        </div>
    )
}

export default Login;