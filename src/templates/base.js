import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import logo from '../assets/logo.svg';
import Link from '../components/Link';
import Column from '../components/Column';
import Wrapper from '../components/Wrapper';
import { transitions } from '../styles';

const StyledLogo = styled.img`
  padding: 30px;
  margin: 0 auto;
  width: 70%;
  transition: ${transitions.base};
  @media (hover: hover) {
    &:hover,
    &:focus {
      transform: translate3d(0, -0.05rem, 0);
    }
  }
`;
const StyledContent = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

class BaseTemplate extends Component {
  render() {
    return (
      <Wrapper>
        <Column>
          <Link to="/">
            <StyledLogo src={logo} alt="EthPay" />
          </Link>
          <StyledContent>{this.props.children}</StyledContent>
        </Column>
      </Wrapper>
    );
  }
}

BaseTemplate.propTypes = {
  children: PropTypes.node.isRequired
};

export default BaseTemplate;
