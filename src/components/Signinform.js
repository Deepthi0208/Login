import React, {useState} from 'react'
 import Login from './Login';
 import "../cssStyle/signupscreen.css";
 import { connect } from 'react-redux';
 import {userLogin} from '../redux/actions/loginAction'
const Signinform=({userLogin})=> {
    const [data,setData]=useState({

        username:'',
        password:''
    })
    const{username,password}=data;
    const changeHandler =e=>{
        setData({...data,[e.target.placeholder]:[e.target.value]})
    }
    const submitHandler=(e)=>{
        e.preventDefault()
        const variables = {
username:username[0],
password:password[0],


        }
       userLogin(variables)
    }
return (
    <div>
    <div className="border">
    <div className="container">
        <center>
            <form onSubmit={submitHandler}>
                <input  className="field" type="text" placeholder="username" value={username} onChange={changeHandler}/><br/><br/>
                <input  className="field" type="password" placeholder="password" value={password} onChange={changeHandler}/><br/><br/>
                 <input className="field" type="submit" submit/><br/><br/>
                {/* <Login/>  */}
            </form>
        </center>
    </div>
    </div>
    { <Login/> }
    </div>
)
}


const mapStateToProps = (state) => {
    return {

    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      userLogin: (variables) => dispatch(userLogin(variables)),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Signinform);