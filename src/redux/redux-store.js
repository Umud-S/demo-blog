import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import friendsReducer from "./friendsReducer";
import authReducer from "./authReducer";

let reducers=combineReducers({
    profilePage:profileReducer, // state:reducer
    messagePage:dialogReducer,
    friendsPage:friendsReducer,
    auth:authReducer
});

let store=createStore(reducers);
window.store=store;
export default store;