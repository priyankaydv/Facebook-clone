import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import './Login.css';
import {auth,provider} from "./firebase";
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function Login() {
    
    



    const [state,dispatch] =useStateValue();
        const SignIn=()=>{
        auth.signInWithPopup(provider)
        .then(result=>{
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,

            })
            
                })
                .catch((error)=>alert(error.message));


    }
    return (
        <div className="login">
        <div className="login_logo">
        <img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt="" />
        <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="" />
        <h3>Facebook helps you connect and share with the people in your life.</h3>

        </div>
        
        
        <Button type="submit" onClick={SignIn} >Sign In  with Google Account </Button>

       <h3><a href=" https://www.facebook.com/pages/create/?ref_type=registration_form" >Create a Page</a> for a celebrity, band or business.</h3>
            
        </div>
    )
}

export default Login
