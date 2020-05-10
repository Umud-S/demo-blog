import React from "react";
import loadingFile from './../../assets/preview.gif';
import style from './IsLoading.module.css';

const IsLoading = () => {
    return <div className={style.loadingDiv}>
        <img className={style.loadingImg} src={loadingFile} alt=""/>
    </div>

}
export default IsLoading;