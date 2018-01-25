import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import logo from '../assets/logo.svg';
import Column from '../components/Column';
import Wrapper from '../components/Wrapper';

const StyledLogo = styled.img`
  padding: 30px;
  margin: 0 auto;
  width: 70%;
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
          <StyledLogo src={logo} alt="EthPay" />
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
