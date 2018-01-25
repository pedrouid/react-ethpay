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
  authSignup,
  authClearPasswords,
  authUpdateEmail,
  authUpdatePassword,
  authUpdateConfirm
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

class Signup extends Component {
  onSubmit = e => {
    e.preventDefault();
    if (this.props.password === this.props.confirm) {
      this.props.authSignup(this.props.email, this.props.password);
    } else {
      this.props.authClearPasswords();
    }
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
            <StyledFormSections>
              <StyledLabel>Confirm</StyledLabel>
              <Input
                type="password"
                placeholder="**********"
                value={this.props.confirm}
                onChange={({ target }) => this.props.authUpdateConfirm(target.value)}
              />
            </StyledFormSections>
            <Button type="submit">Sign Up</Button>
          </Form>
        </Card>
      </Base>
    );
  }
}

Signup.propTypes = {
  authSignup: PropTypes.func.isRequired,
  authClearPasswords: PropTypes.func.isRequired,
  authUpdateEmail: PropTypes.func.isRequired,
  authUpdatePassword: PropTypes.func.isRequired,
  authUpdateConfirm: PropTypes.func.isRequired,
  fetching: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirm: PropTypes.string.isRequired
};

const reduxProps = ({ auth }) => ({
  fetching: auth.fetching,
  email: auth.email,
  password: auth.password,
  confirm: auth.confirm
});

export default connect(reduxProps, {
  authSignup,
  authClearPasswords,
  authUpdateEmail,
  authUpdatePassword,
  authUpdateConfirm
})(Signup);
