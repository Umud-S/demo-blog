import React from 'react';
import {addMessageAC, updateMessageTextChangeAC} from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = state => {
    return {
        newMessageText: state.messagePage.newMessageText,
        messagePage: state.messagePage
    }
}
let mapDispatchToProps = dispatch => {
    return {
        addButtonClick: (newText) => {
            dispatch(addMessageAC(newText));
        },
        textChange: (newText) => {
            dispatch(updateMessageTextChangeAC(newText));
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;

// const DialogsContainer = (props) => {
//     let state = props.store.getState();
//     let addButtonClick = (newText) => {
//         let action = addMessageAC(newText);
//         props.dispatch(action);
//     };
//     let textChange = (newText) => {
//         let action = updateMessageTextChangeAC(newText);
//         props.dispatch(action);
//     }
//     return (<Dialogs newMessageText={state.messagePage.newMessageText}
//                      messagePage={state.messagePage}
//                      addButtonClick={addButtonClick}
//                      textChange={textChange}
//         />
//     );
// }