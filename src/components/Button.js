import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../styles';

const StyledButton = styled.div`
  color: rgb(${colors.white});
  display: inline-block;
  cursor: pointer;
  font-weight: 700;
  width: 30%;
  font-size: 20px;
  margin-top: 30px;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 20px;
  background-image: linear-gradient(to left, rgb(${colors.yellow}), rgb(${colors.blue}));
`;

const Button = ({ children, ...props }) => <StyledButton {...props}>{children}</StyledButton>;

Button.propTypes = {
  children: PropTypes.node.isRequired
};

export default Button;
