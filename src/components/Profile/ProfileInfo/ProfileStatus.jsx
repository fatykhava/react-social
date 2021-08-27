import React from 'react';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    })
  }

  activationEditMode = () => {
    this.setState({
      editMode: true
    })
  }

  deactivationEditMode = () => {
    this.setState({
      editMode: false
    })

    this.props.updateProfileStatus(this.state.status);
  }

  render = () => {
    return (
      <div>
        {!this.state.editMode &&
        <div>
          <span onDoubleClick={this.activationEditMode}>{this.props.status}</span>
        </div>
        }
        {this.state.editMode &&
        <div>
          <input onBlur={this.deactivationEditMode} autoFocus={true} onChange={this.onStatusChange} value={this.state.status}/>
        </div>
        }
      </div>
    )
  }
}

export default ProfileStatus;
