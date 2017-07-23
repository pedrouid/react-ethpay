import React, { Component } from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import Payment from './pages/Payment';
import NotFound from './pages/NotFound';

const StyledWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  text-align: center;
`;

class Router extends Component {
  render = () => (
    <StyledWrapper>
      <Switch>
        <Route exact path="/" component={Payment} />
        <Route component={NotFound} />
      </Switch>
    </StyledWrapper>
  );
}

export default Router;
