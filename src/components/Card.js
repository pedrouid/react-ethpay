import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../styles';

const StyledCard = styled.div`
  background: rgba(${colors.white}, 0.05);
  padding: 50px 20px;
  border-radius: 2px;
`;
const Card = ({ children, ...props }) => <StyledCard {...props}>{children}</StyledCard>;

Card.propTypes = {
  children: PropTypes.node.isRequired
};

export default Card;
