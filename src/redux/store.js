import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from "redux-thunk";
import userReducer from './reducers/user';

const rootReducer = combineReducers({
    user:userReducer
})

const middleware = [thunk];

const store = createStore(
     rootReducer,
  applyMiddleware(...middleware)
)

 export {store}