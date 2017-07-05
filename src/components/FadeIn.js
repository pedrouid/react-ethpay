import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { transitions } from '../styles';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const StyledWrapper = styled.div`
  transition: ${transitions.base};
  will-change: transform, opacity;
  animation: 0.5s ease 0s normal 1 ${fadeIn};
`;

const FadeIn = ({ children, ...otherProps }) => (
  <StyledWrapper {...otherProps}>
    {children}
  </StyledWrapper>
);

FadeIn.propTypes = {
  children: PropTypes.node.isRequired
};

export default FadeIn;
