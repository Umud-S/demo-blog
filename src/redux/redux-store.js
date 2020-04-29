import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import friendsReducer from "./friendsReducer";

let reducers=combineReducers({
    profilePage:profileReducer, // state:reducer
    messagePage:dialogReducer,
    friendsPage:friendsReducer
});

let store=createStore(reducers);
window.store=store;
export default store;