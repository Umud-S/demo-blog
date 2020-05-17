import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import friendsReducer from "./friendsReducer";
import authReducer from "./authReducer";
import thunkMiddleWare from "redux-thunk";
import { reducer as formReducer } from 'redux-form'

let reducers=combineReducers({
    profilePage:profileReducer, // state:reducer
    messagePage:dialogReducer,
    friendsPage:friendsReducer,
    auth:authReducer,
    form:formReducer
});

let store=createStore(reducers, applyMiddleware(thunkMiddleWare));
window.store=store;
export default store;
