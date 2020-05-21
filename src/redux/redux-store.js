import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleWare from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import appReducer from "./appReducer";

let reducers=combineReducers({
    profilePage:profileReducer, // state:reducer
    messagePage:dialogReducer,
    friendsPage:usersReducer,
    auth:authReducer,
    form:formReducer,
    app:appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleWare)));


// let store=createStore(reducers, applyMiddleware(thunkMiddleWare));
window.__store=store;
export default store;
