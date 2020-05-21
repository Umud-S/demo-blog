import React, {useEffect, useState} from 'react';
import p from './ProfileInfo.module.css'

const ProfileStatusHook =(props)=>{

    let [editMode,setEditMode]=useState(false); //destructer use state two part element and setElement func
    let[status,setStatus]=useState(props.status);

    //after some update on props component will rerender and show new state/old class shouldUpdate
    useEffect(()=>{
        setStatus(props.status)
    },[props.status]);


    const activateEditMode = () => {
                setEditMode(true);
    }
    const deactivateEditMode = (e) => {
                setEditMode(false);
                setStatus(e.currentTarget.value);
        props.updateStatus(status)
    }
    const onChangeInputStatus = (e) => {
             setStatus(e.currentTarget.value);
    }

        return <>
            <div className={p.status}>
                {!editMode &&
                <div><span onDoubleClick={activateEditMode}> Status : {status || '-----'}</span>
                </div>}
                {editMode &&
                <div><input onChange={onChangeInputStatus}
                            autoFocus={true} onBlur={deactivateEditMode}
                            value={status}/></div>}
            </div>
        </>

}

export default ProfileStatusHook;

// state = {
//     editMode: false,
//     status: this.props.status
// }

// componentDidUpdate(prevProps, prevState) {
//     // debugger
//     if (prevProps.status !== this.props.status) {
//         this.setState({
//             status: this.props.status
//         })
//     }
// }
