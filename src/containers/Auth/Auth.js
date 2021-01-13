import React, { useState,Component } from 'react';

import Login from './Login/Login';
import Signup from './Signup/Signup';

import './Auth.scss';



// const Auth = ()=>{
//     const [isLogin,setIsLogin] = useState(true);

//     const toggleView = ()=>{
//         setIsLogin(!isLogin)
//     }

//     return (
//         <div className = "auth">
//             <span onClick = {toggleView} > Go to {isLogin ? "Signup" : "Login"}</span>
//             {isLogin ? 
//                 <Login />
//                 :
//                 <Signup />
//             }
//         </div>
//     )
// }

// export default Auth;

class AuthClass extends Component {
    state = {
        isLogin:true
    }

    toggleView = ()=>{
        this.setState({
            isLogin: !this.state.isLogin
        })
    }    

    render () {
        return (
            <div className = "auth">
                <span onClick = {this.toggleView} > Go to {this.state.isLogin ? "Signup" : "Login"}</span>
                {this.state.isLogin ? 
                    <Login />
                    :
                    <Signup />
                }
         </div>  
        )
    }
}

export default AuthClass;