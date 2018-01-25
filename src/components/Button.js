import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, transitions } from '../styles';

const StyledButton = styled.button`
  color: rgb(${colors.white});
  display: inline-block;
  cursor: pointer;
  font-weight: 700;
  width: 140px;
  font-size: 20px;
  margin-top: 30px;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 20px;
  transition: ${transitions.base};
  background-image: linear-gradient(to left, rgb(${colors.yellow}), rgb(${colors.blue}));
  &:active,
  &:focus {
    outline: none;
    background-image: linear-gradient(to left, rgb(${colors.yellow}), rgb(${colors.blue}));
  }
  @media (hover: hover) {
    &:hover,
    &:focus {
      transform: translate3d(0, -0.05rem, 0);
    }
  }
`;

const Button = ({ children, ...props }) => <StyledButton {...props}>{children}</StyledButton>;

Button.propTypes = {
  children: PropTypes.node.isRequired
};

export default Button;
