import React from 'react';
import p from './ProfileInfo.module.css'

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
                editMode: true
            }
        )
        // this.forceUpdate(); for test state update
    }
    deactivateEditMode = (e) => {
        this.setState({
                editMode: false,
                status: e.currentTarget.value
            }
        )
        this.props.updateStatus(this.state.status)
    }
    onChangeInputStatus = (e) => {
        this.setState(
            {
                status: e.currentTarget.value
            }
        )
    }

    componentDidUpdate(prevProps, prevState) {
        // debugger
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return <>
            <div className={p.status}>
                {!this.state.editMode &&
                <div><span onDoubleClick={this.activateEditMode}> Status : {this.props.status || '-----'}</span>
                </div>}
                {this.state.editMode &&
                <div><input onChange={this.onChangeInputStatus}
                            autoFocus={true} onBlur={this.deactivateEditMode}
                            value={this.state.status}/></div>}
            </div>
        </>
    }
}

export default ProfileStatus;
