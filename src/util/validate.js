//import React from 'react';

export const validateMail = (val)=>{
    if(!val.Post.includes("@")) {
        return {
            errorMail:" Mail must contain @ ",
            isValidMail:false
        }
    } else {
        return {
            isValidMail:true
        }
        
    }
}


export const validatePassword = (val) => {
     if(val.Pass.length < 8) {
        return {
            errorPassword:" Password must contain more than 7 characters " ,
            isValidPassword:false
        }
    } else {
        return {
            isValidPassword:true
        }
        
    }
}