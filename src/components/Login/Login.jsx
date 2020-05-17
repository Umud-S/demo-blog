import React from "react";
import {Field, reduxForm} from "redux-form";
import {loginMe} from "../../redux/authReducer";
import {connect} from "react-redux";




const LoginForm = (props) => {
    return <div>
        <h1>Login</h1>
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={'Login'} name={'login'} component={'input'}/></div>
            <div><Field placeholder={'Password'} name={'password'} component={'input'}/></div>
            <div><Field type={'checkbox'} name={'rememberMe'} component={'input'} />remember me</div>
            <div>
                <button>Login</button>
            </div>
        </form>
    </div>
}

const LoginReduxForm=reduxForm({
    form:'login'
})(LoginForm)



// export default compose(
//     connect(mapStateToProps),
//     reduxForm({
//         form:'login'
//     })
// )(LoginForm)
const Login = (props) => {
    const onSubmit=(formData)=>{
        // let {login,password,rememberMe}=formData;
        // console.log(login)
        // console.log(password)
        // console.log(rememberMe)
        loginMe(formData.login,formData.password,formData.rememberMe).then(response=>{
            console.log(response)
        })
    }
    return <div>
        <LoginReduxForm
            onSubmit={onSubmit}/>
    </div>
}

export default Login;
