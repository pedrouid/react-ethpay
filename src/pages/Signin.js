import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Card from '../components/Card';
import Form from '../components/Form';
import Input from '../components/Input';
import Button from '../components/Button';
import Base from '../templates/base';
import {
  authSignin,
  authClearPasswords,
  authUpdateEmail,
  authUpdatePassword
} from '../redux/_auth';
import { responsive } from '../styles';

const StyledLabel = styled.label`
  text-transform: uppercase;
  font-weight: 500;
  width: 100px;
  min-width: 100px;
`;

const StyledFormSections = styled.div`
  width: 100%;
  display: flex;
  padding: 10px 20%;
  @media screen and (${responsive.sm.max}) {
    padding: 10px 10%;
  }
  @media screen and (${responsive.xs.max}) {
    padding: 10px 5%;
  }
`;

class Signin extends Component {
  onSubmit = e => {
    e.preventDefault();
    this.props.authSignin(this.props.email, this.props.password);
  };
  render() {
    return (
      <Base>
        <Card>
          <Form onSubmit={this.onSubmit}>
            <StyledFormSections>
              <StyledLabel>Email</StyledLabel>
              <Input
                type="text"
                placeholder="your@email.com"
                value={this.props.email}
                onChange={({ target }) => this.props.authUpdateEmail(target.value)}
              />
            </StyledFormSections>
            <StyledFormSections>
              <StyledLabel>Password</StyledLabel>
              <Input
                type="password"
                placeholder="**********"
                value={this.props.password}
                onChange={({ target }) => this.props.authUpdatePassword(target.value)}
              />
            </StyledFormSections>
            <Button type="submit">Sign In</Button>
          </Form>
        </Card>
      </Base>
    );
  }
}

Signin.propTypes = {
  authSignin: PropTypes.func.isRequired,
  authClearPasswords: PropTypes.func.isRequired,
  authUpdateEmail: PropTypes.func.isRequired,
  authUpdatePassword: PropTypes.func.isRequired,
  fetching: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
};

const reduxProps = ({ auth }) => ({
  fetching: auth.fetching,
  email: auth.email,
  password: auth.password
});

export default connect(reduxProps, {
  authSignin,
  authClearPasswords,
  authUpdateEmail,
  authUpdatePassword
})(Signin);
