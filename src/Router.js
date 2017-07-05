import React, { Component } from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import FadeIn from './components/FadeIn';
import Payment from './pages/Payment';
import Login from './pages/Login';
import Logout from './pages/Logout';
import NotFound from './pages/NotFound';

const StyledWrapper = styled(FadeIn)`
  height: 100vh;
  width: 100vw;
  text-align: center;
`;

class Router extends Component {
  render = () => (
    <StyledWrapper>
      <Switch>
        {/* <Route exact path="/" render={() => <Redirect to="/about" />} /> */}
        <Route exact path="/" component={Payment} />
        {/* <Route exact path="/about" component={About} /> */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <Route component={NotFound} />
      </Switch>
    </StyledWrapper>
  );
}

export default Router;
