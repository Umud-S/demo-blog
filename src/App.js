import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route, withRouter} from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FriendsContainer from "./components/Friends/FriendContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initialiseAPP} from "./redux/appReducer";
import ShowLoadingAnimation from "./components/common/ShowLoadingAnimation/ShowLoadingAnimation";

class App extends React.Component {
    componentDidMount() {
        this.props.initialiseAPP();    //check User logged
    }

    render() {
        if(!this.props.initialised) {
            return <ShowLoadingAnimation/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer/>}/>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/friends' render={() => <FriendsContainer/>}/>
                    <Route path='/login' render={() => <LoginPage/>}/>
                </div>
            </div>
        );
    }
}

const  mapStateToProps=(state)=>({
    initialised:state.app.initialised
})
export default compose(
    withRouter,
    connect(mapStateToProps, {initialiseAPP}))
(App);


// dispatch={props.store.dispatch.bind(props.store)}
