import actionTypes from "../actions/actionTypes";

const initialState = {
  user: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN:
      return {
        ...state,
        user:action.payload
      };
    case actionTypes.LOG_OUT:
      return{
        ...state,
        user:action.payload
      }
      default:
        return state;     
}
}
export default userReducer;
