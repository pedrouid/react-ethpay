import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles';

const StyledInput = styled.input`
  width: 100%;
  -webkit-appearance: none;
  border: 0;
  border-style: none;
  background: transparent;
  outline: none;
  color: rgb(${colors.white});
  font-size: 1em;
  font-family: inherit;
  padding: 0;
  &::placeholder {
    color: rgb(${colors.white});
    opacity: 0.8;
  }
`;

const Input = props => <StyledInput {...props} />;

export default Input;
