import actionTypes from "./actionTypes";

export const userLoginSuccess=(data)=>{
    return{
        type:actionTypes.USER_LOGIN,
        payload:data
    }
}

export const userLogin=(data)=>{
    return function(dispatch){
        dispatch(userLoginSuccess(data))
    }
}

export const userLogout=(data)=>{
    return{
        type:actionTypes.LOG_OUT,
        payload:data
    }
}