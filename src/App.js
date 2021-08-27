import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Sidebar from './components/Sidebar/Sidebar';
import HeaderContainer from './components/Header/HeaderContainer';
import {connect} from 'react-redux';
import {initializeApp} from './redux/reducers/appReducer';
import Preloader from './components/common/Preloader/Preloader';
import withSuspense from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const Login = React.lazy(() => import('./components/Login/Login'));


class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.isInit) {
      return <Preloader />
    }

    return (
      <div className='app-wrapper'>
        <HeaderContainer/>
        <Sidebar/>
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
          <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
          <Route path='/users' render={withSuspense(UsersContainer)}/>
          <Route path='/news' component={News}/>
          <Route path='/music' component={Music}/>
          <Route path='/settings' component={Settings}/>
          <Route path='/login' render={withSuspense(Login)}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isInit: state.app.isInit
})

export default connect(mapStateToProps, {initializeApp})(App);
