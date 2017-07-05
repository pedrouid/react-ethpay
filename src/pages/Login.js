import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Link from '../components/Link';
import Input from '../components/Input';
import Button from '../components/Button';
import Wrapper from '../components/Wrapper';
import Form from '../components/Form';
import logo from '../assets/logo.svg';
import { authenticationLogin, authenticationUpdateEmail, authenticationUpdatePassword } from '../redux/_authentication';

const StyledForm = styled(Form)`
  padding: 25px;
`;

const StyledLogo = styled.img`
  width: 50%;
`;

class Login extends Component {
  onSubmit = () => {
    this.props.authenticationLogin(this.props.email, this.props.password);
  }
  render() {
    return (
      <div>
        <Link to="/">
          <StyledLogo src={logo} alt="App Logo" />
        </Link>
        <Wrapper fetching={this.props.fetching}>
          <StyledForm onSubmit={this.onSubmit}>
            <Input label="Email" type="email" onValueChange={value => this.props.authenticationUpdateEmail(value)} />
            <Input label="Password" type="password" onValueChange={value => this.props.authenticationUpdatePassword(value)} />
            <Button type="submit" text="Login" round />
          </StyledForm>
        </Wrapper>
      </div>
    );
  }
}

Login.propTypes = {
  authenticationLogin: PropTypes.func.isRequired,
  authenticationUpdateEmail: PropTypes.func.isRequired,
  authenticationUpdatePassword: PropTypes.func.isRequired,
  fetching: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
};

const reduxProps = ({ authentication }) => ({
  fetching: authentication.fetching,
  email: authentication.email,
  password: authentication.password
});

export default connect(reduxProps, {
  authenticationLogin,
  authenticationUpdateEmail,
  authenticationUpdatePassword
})(Login);
