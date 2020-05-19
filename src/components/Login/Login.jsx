import React from "react";
import {Field, reduxForm} from "redux-form";
import {loginMe} from "../../redux/authReducer";
import {maxLengthCreater, required} from "../../utils/validators/validators";
import style from "./Login.module.css"
import {Input} from "../common/FormControls/FormControls";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

let maxLength20 = maxLengthCreater(20);

const LoginForm = (props) => {
    return <div className={style.wrapper}>
        <h1>Login</h1>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'}
                       name={'email'}
                       component={Input}
                       validate={[required,maxLength20]}
                />
            </div>
            <div>
                <Field placeholder={'Password'}
                       name={'password'}
                       type={'password'}
                       component={Input}
                       validate={[required,maxLength20]}/>
            </div>
            <div>
                <Field type={'checkbox'}
                       name={'rememberMe'}
                       component={Input}
                />remember me
            </div>
            {props.error && <div>{props.error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    </div>
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)
const Login = (props) => {
    const onSubmitToLogin = (formData) => {
        props.loginMe(formData.email,formData.password,formData.rememberMe);

    }
    if(props.isAuth) return <Redirect to={'/profile'}/>

    return <div>
        <LoginReduxForm onSubmit={onSubmitToLogin}/>
    </div>
}
const mapStateToProps=(state)=>({
    isAuth:state.auth.isAuth
})

export default connect(mapStateToProps,{
    loginMe
}) (Login);



// export default compose(
//     connect(mapStateToProps),
//     reduxForm({
//         form:'login'
//     })
// )(LoginForm)
