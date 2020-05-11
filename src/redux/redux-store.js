import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import friendsReducer from "./friendsReducer";
import authReducer from "./authReducer";
import thunkMiddleWare from "redux-thunk";

let reducers=combineReducers({
    profilePage:profileReducer, // state:reducer
    messagePage:dialogReducer,
    friendsPage:friendsReducer,
    auth:authReducer
});

let store=createStore(reducers, applyMiddleware(thunkMiddleWare));
window.store=store;
export default store;