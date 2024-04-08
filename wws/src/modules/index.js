import { combineReducers } from "redux";
import login from './login';
import input from './input';
const rootReducer = combineReducers({
   login, input
});

export default rootReducer;