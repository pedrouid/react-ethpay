import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles';

const StyledInput = styled.input`
  -webkit-appearance: none;
  width: 35%;
  border: 0;
  border-style: none;
  background: transparent;
  outline: none;
  color: rgb(${colors.white});
  text-align: center;
  font-size: 1em;
  font-family: inherit;
  margin: 0 5px;
  padding: 0;
  &::placeholder {
    text-transform: uppercase;
    color: rgb(${colors.white});
    opacity: 0.8;
  }
`;

const Input = props => <StyledInput {...props} />;

export default Input;
