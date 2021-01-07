import React,{useState} from 'react';
import Input from '../../components/Input/Input' ;
import Button from '../../components/Button/Button' ;
import   './Form.css';
import {validate} from '../../util/validate';

const Form = () => {

    //const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
      const onChange = (event) =>{
          const newVal = event.target.value;
          console.log(validate (newVal)) ;
          setPassword(newVal);
      }  
    return (
        <div className = "form">
           
            <img alt="Slack" src="https://a.slack-edge.com/bv1-9/slack_logo-ebd02d1.svg" height="34" title="Slack"></img>
            
            <h1>Sign in to Slack</h1>
            <p>Continue with the Google account or email address you use to sign in</p>
            <Input className="log" placeholder = "email" />
            <Input value = {password} onChange = {onChange} className = "pass" placeholder = "password"/>
            <Button />
        </div>
    )
}




export default Form;
