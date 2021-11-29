import  { useState } from "react";
import{GoogleLogin,GoogleLogout} from 'react-google-login';
import React from 'react';
export default function Login(){
    const clientId="917018008286-1kbo32ar7ujt0cul9ornqo1aj1pk55j8.apps.googleusercontent.com";
    const[showLoginButton,setShowLoginButton]=useState(true);
    const[showLogoutButton,setShowLogoutButton]=useState(false);
    
    const onLoginSuccess=(res)=>{
        console.log('Login Success:',res.profileObj);
        setShowLoginButton(false);
        setShowLogoutButton(true);
    }
    const onFailureSuccess=(res)=>{
        console.log('Login Failed:',res);
    }
    const onSignoutSuccess=()=>{
    alert("You have been signed out successfully");
    setShowLoginButton(true);
    setShowLogoutButton(false);
}

return(
<div>{showLoginButton ?
<GoogleLogin
    clientId={clientId}
    buttonText="Login"
    onSuccess={onLoginSuccess}
    onFailure={onFailureSuccess}
    cookiePolicy={'single_host_origin'}
  />:null
}
{showLogoutButton ?
   <GoogleLogout
      clientId={clientId}
      buttonText="Logout"
      onLogoutSuccess={onSignoutSuccess}
    >
    </GoogleLogout>:null
    }

</div>
)
}