import React from 'react';
import '../cssStyle/welcome.css';
import { userLogout } from '../redux/actions/loginAction';
import { connect } from 'react-redux';


 const Logout=({userLogout})=>{
    const handleLogout=(e)=>{
      const variables = {
         username:"",
         password:""
      }
        userLogout(variables)
    
};
     return(
     <div className="Welcome">
        <h1> <span classname ="heading">Welcome to page</span>
      </h1>{" "}<br/>
      <button classname="logout_button" onClick={(e)=> handleLogout(e)}>Logout</button>
     </div>
     );
};

const mapStateToProps=(state)=>{
   return{

   }
}

const mapDispatchToProps=(dispatch)=>{
   return{
      userLogout:(variables)=>dispatch(userLogout(variables))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);