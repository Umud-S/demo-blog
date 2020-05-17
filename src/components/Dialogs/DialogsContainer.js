import React from 'react';
import {addMessage, updateMessageTextChange} from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose} from "redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

let mapStateToProps = state => {
    return {
        messagePage: state.messagePage,
        isAuth: state.auth.isAuth
    }
}

class DialogsContainer extends React.Component{
    render() {
        return <Dialogs {...this.props}/>
    }
}
export default compose(
    connect(mapStateToProps, {
        addMessage
    }),
    WithAuthRedirect
)(DialogsContainer)

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
//______________________
// let mapDispatchToProps = dispatch => {
//     return {
//         addButtonClick: (newText) => {
//             dispatch(addMessageAC(newText));
//         },
//         textChange: (newText) => {
//             dispatch(updateMessageTextChangeAC(newText));
//         }
//     }
// }
// let mapStateToProps = state => {
//     return {
//         newMessageText: state.messagePage.newMessageText,
//         messagePage: state.messagePage
//     }
// }
// let mapDispatchToProps = dispatch => {
//     return {
//         addButtonClick: (newText) => {
//             dispatch(addMessageAC(newText));
//         },
//         textChange: (newText) => {
//             dispatch(updateMessageTextChangeAC(newText));
//         }
//     }
// }
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
// export default DialogsContainer;
