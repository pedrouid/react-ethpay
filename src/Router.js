import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import Payment from './pages/Payment';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import NotFound from './pages/NotFound';

const StyledWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  text-align: center;
`;

class Router extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBvWwMeBkcJXoRTeZuurR9bcfWK9naqfso',
      authDomain: 'react-ethpay.firebaseapp.com',
      databaseURL: 'https://react-ethpay.firebaseio.com',
      projectId: 'react-ethpay',
      storageBucket: '',
      messagingSenderId: '2562886489'
    };
    firebase.initializeApp(config);
    window.browserHistory = this.context.router.history;
  }
  render = () => (
    <StyledWrapper>
      <Switch>
        <Route exact path="/" component={Payment} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <Route component={NotFound} />
      </Switch>
    </StyledWrapper>
  );
}

Router.contextTypes = {
  router: PropTypes.object.isRequired
};

export default Router;
