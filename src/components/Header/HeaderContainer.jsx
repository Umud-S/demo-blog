import React from 'react';
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserData} from "../../redux/authReducer";

class HeaderContainer extends React.Component{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {
                withCredentials:true //qeydiyyatdan kecibmi?
            })
            .then(response=>{
                // debugger;
                if(response.data.resultCode===0){//user eger saytda qeydiyyatdan kecibse sifir qaytarir
                    let {id, login, email}=response.data.data; // datani parchalayiriq
                    this.props.setUserData(id, email, login); // datani gonderirik yeni state kimi
                    }
        })
    }
    render() {
        return (
            <Header {...this.props} />// butun aldigimiz propslari gonderirik ic komponente
        );
    }
}
let mapStateToProps=(state)=>({
    isAuth:state.auth.isAuth,  //steyti stor-dan cekirikki konteynere verek
    login:state.auth.login
})
//react-redux-la connect metodu ile konteyner metodumusa stordan cekilen ve reduserden gelen ozellikleri veririk
export default connect(mapStateToProps,{setUserData})(HeaderContainer) ;