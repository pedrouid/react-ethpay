import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledForm = styled.form`
  width: 100%;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  & button {
    margin: 10px auto;
  }
`;

class Form extends Component {
  componentWillUnmount() {
    document.activeElement.blur();
  }
  render = () => {
    const { children, ...props } = this.props;
    return (
      <StyledForm noValidate {...props}>
        {children}
      </StyledForm>
    );
  };
}

Form.propTypes = {
  children: PropTypes.node.isRequired
};

export default Form;
