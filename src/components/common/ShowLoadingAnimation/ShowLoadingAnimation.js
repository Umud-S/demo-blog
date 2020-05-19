import React from "react";
import loadingFile from './../../assets/preview.gif';
import style from './ShowLoadingAnimation.module.css';

const ShowLoadingAnimation = () => {
    return <div className={style.loadingDiv}>
        <img className={style.loadingImg} src={loadingFile} alt=""/>
    </div>

}
export default ShowLoadingAnimation;
