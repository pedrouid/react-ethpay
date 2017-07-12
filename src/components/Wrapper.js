import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import Spinner from './Spinner';
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
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Wrapper = ({ fetching, children, ...otherProps }) => (
  <StyledWrapper {...otherProps}>
    {(fetching)
      ? <Spinner white />
      : children
    }
  </StyledWrapper>
);

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  fetching: PropTypes.bool
};

Wrapper.defaultProps = {
  fetching: false
};

export default Wrapper;
