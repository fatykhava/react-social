import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getProfileInfo, getProfileStatus, updateProfileStatus} from '../../redux/reducers/profileReducer';
import {withRouter} from 'react-router';
import {compose} from 'redux';

class ProfileContainer extends React.Component {
  componentDidMount() {
    //match приходит в параметры из-за логинизации
    let userId = this.props.match.params.userId ? this.props.match.params.userId : this.props.authUserId;
    if (!userId) {
      this.props.history.push('/login');
    }
    this.props.getProfileInfo(userId);
    this.props.getProfileStatus(userId);
  }

  render = () => {
    return (
      <Profile {...this.props}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profileInfo: state.profilePage.profileInfo,
    profileStatus: state.profilePage.profileStatus,
    authUserId: state.auth.id
  };
}

export default compose(
  connect(mapStateToProps, {getProfileInfo, getProfileStatus, updateProfileStatus}),
  withRouter
)(ProfileContainer);
