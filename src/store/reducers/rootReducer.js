import { combineReducers } from 'redux';
import authReducer from './authReducer';
import projectReducer from './projectReducer';
import signupReducer from './signupReducer';
import Notification from './Notification';
import forgot from './forgotPassword';
import Reset from './resetReducer';
import Additional from './Additional';

const rootReducer = combineReducers({
    auth : authReducer,
    project : projectReducer,
    signup: signupReducer,
    Notify : Notification,
    forgot,
    Reset,
    Additional
})

export default rootReducer;
