import React,{useState} from 'react';
import Input from '../../components/Input/Input' ;
import Button from '../../components/Button/Button' ;
import   './Form.css';
import {validatePassword} from '../../util/validate';
import {validateMail} from '../../util/validate';

const Form = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const [errorTextMail,setErrorMail] = useState('');
    const [errorTextPassword,setErrorPassword] = useState('');

    const onChangeEmail = (event) =>{
        setEmail (event.target.value); 
    } 

    const onChangePassword = (event) =>{
        setPassword(event.target.value);
        //console.log(validatePassword (event.target.value)) ;   
    }  

    const loginButton = () =>{
        let userData = {
            Post:email,
            Pass:password
        }

        if(validateMail(userData).isValidMail === false){
            setErrorMail(validateMail(userData).errorMail)
        }
        if(validateMail(userData).isValidMail){
            setErrorMail("")
        }
        if(validatePassword(userData).isValidPassword === false){
            setErrorPassword(validatePassword(userData).errorPassword)
        }
        if(validatePassword(userData).isValidPassword ){
            setErrorPassword("")
        }
        if(validateMail(userData).isValidMail && validatePassword(userData).isValidPassword){
            alert(
                "WELCOME" + "\n" + "Your mail is " + email + "\n" + "Your pass is " + password
            )
        }

    }




    return (
        <div className = "form">
           
            <img alt="Slack" src="https://a.slack-edge.com/bv1-9/slack_logo-ebd02d1.svg" height="34" title="Slack"></img>
            
            <h1>Sign in to Slack</h1>
            <p>Continue with the Google account or email address you use to sign in</p>
            <Input type = "email" value = {email} onChange = {onChangeEmail} className="log" placeholder = "email" />
            <p className = "error-text">{errorTextMail}</p>
            <Input type = "password" value = {password} onChange = {onChangePassword} className = "pass" placeholder = "password"/>
            <p className = "error-text">{errorTextPassword}</p>
            <Button onClick = {loginButton}> Sign In with Email </Button>
        </div>
    )
}




export default Form;
