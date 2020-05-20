import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import LoginForm from './components/Onboarding/Login/LoginForm';
import ResetPasswordForm from './components/Onboarding/ResetPasswordForm';
import AccountRecovery from './components/Onboarding/AccountRecovery';
import Dashboard from './components/Dashboard';
import UserDashboard from './views/UserDashboard/UserDashboard';
import Marketplace from './views/Marketplace/Marketplace';
import Landing from './components/Landing/Landing-2';
import MainFaq from './components/FAQ/Main';
import LandingFaq from './components/FAQ/LandingFaq';
import Booking from './components/Booking/Booking';
import Reschedule from './components/Reschedule/Reschedule';
import Feedback from './views/Feedback/Feedback';
import Interview from './views/Interview/Interview';
import Chat from './components/Chat/ChatScreen';
import StartChat from './components/Chat/Chat';
import SignUp from './components/Onboarding/SignupStepper';
import SettingsTabs from './views/Settings/SettingsTabs';
import Code from './views/Code/Code';
import GiveFeedback from './views/Feedback/GiveFeedback';
import About from './components/About/About';
import Challenges from './views/Challenges/Challenges';

const globalTheme = createMuiTheme({
  typography: {
    fontFamily: ['Nunito', 'Helvetica', 'sans-serif'].join(','),
  },
});

function App({ user, isLoggedIn }) {
  const routes = (
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route path={'/dashboard'} component={UserDashboard} />
      {user && user.role_id === 1 ? (
        <Route path={'/marketplace'} component={Marketplace} />
      ) : null}
      <Route path={'/appointment'} component={Booking} />
      <Route path={'/reschedule'} component={Reschedule} />
      <Route path={'/feedback'} component={Feedback} />
      <Route path={'/interview'} component={Interview} />
      <Route path={'/Settings'} component={SettingsTabs} />
      <Route path={'/FAQ'} component={MainFaq} />
      <Route path={'/start_chat'} component={StartChat} />
      <Route path={'/chat'} component={Chat} />
      <Route path={'/code'} component={Code} />
      <Route path={'/givefeedback'} component={GiveFeedback} />
      <Route path={'/challenges'} component={Challenges} />
      <Redirect to='/dashboard' />
    </Switch>
  );

  if (isLoggedIn) {
    return (
      <ThemeProvider theme={globalTheme}>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/about' component={About} />
          <Dashboard routes={routes} />
        </Switch>
      </ThemeProvider>
    );
  }

  return (
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route path='/login/' component={LoginForm} />
      <Route path='/resetPassword' component={ResetPasswordForm} />
      <Route
        path='/accountRecovery/:token'
        component={AccountRecovery}
      />
      <Route path='/register' component={SignUp} />
      <Route path='/faq' component={LandingFaq} />
      <Route path='/about' component={About} />
      <Route path={'/video'} component={Interview} />
      <Redirect to='/' />
    </Switch>
  );
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
    isLoggedIn: state.userReducer.isLoggedIn,
  };
};

export default connect(mapStateToProps)(App);
