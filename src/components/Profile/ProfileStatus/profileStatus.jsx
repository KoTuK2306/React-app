import React from "react";
import classes from "./profileStatus.module.css";

class ProfileStatus extends React.Component {
  
  state = {
    editMode: false,
  };

  activateEditMode = () => {
    this.setState({
      editMode: true,
      status: this.props.status
    })
  }
  deactivateEditMode = () => {
    this.setState({
      editMode: false,
      
    })
    this.props.updateStatus(this.state.status)
  }

  onStatusChange = (event) => {
    this.setState({
      status: event.currentTarget.value
    })
  }

  componentDidUpdate(prevProps, prevState){
    if (prevProps.status !== this.props.status){
      this.setState({
        status: this.props.status
      })
    }
  }

  render() {
    return (
      <>
        <div className={classes.statusDiv}>
          {!this.state.editMode && (
            <div className={classes.status}>
                <span onDoubleClick={this.activateEditMode}>
                  {!this.props.status && 'Status is empty'}
                  {this.props.status && this.props.status}</span>
            </div>
          )}

          {this.state.editMode && (
            <div className={classes.editModeInput}>
              
              <input onChange={this.onStatusChange}
                     className={classes.statusInput} 
                     autoFocus={true}
                     onBlur={this.deactivateEditMode}
                     value={this.state.status}
                     maxlength="280"></input>
              <div className={classes.inputLine}/>
            </div>
          )}
        
        </div>
      </>
    );
  }
}

export default ProfileStatus;
