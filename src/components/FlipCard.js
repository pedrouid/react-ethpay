import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from './Card';
import { transitions } from '../styles';

const StyledFlipCard = styled(Card)`
  transition: ${transitions.base};
  transform: ${({ invert }) => (invert ? 'rotateY(180deg)' : 'rotateY(0deg)')};
`;

const StyledFlipCardWrapper = styled.div`
  height: 425px;
  position: relative;
  transition: ${transitions.base};
  transform: ${({ invert }) => (invert ? 'rotateY(180deg)' : 'rotateY(0deg)')};
`;

const StyledFlipCardContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${transitions.base};
  opacity: ${({ show }) => (show ? 1 : 0)};
  transform: ${({ show }) => (show ? 'translateY(0)' : 'translateY(15px)')};
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  pointer-events: ${({ show }) => (show ? 'auto' : 'none')};
`;

const FlipCard = ({ invert, frontView, backView, ...props }) => (
  <StyledFlipCard invert={invert} {...props}>
    <StyledFlipCardWrapper invert={invert}>
      <StyledFlipCardContent show={!invert}>{frontView}</StyledFlipCardContent>
      <StyledFlipCardContent show={invert}>{backView}</StyledFlipCardContent>
    </StyledFlipCardWrapper>
  </StyledFlipCard>
);

FlipCard.propTypes = {
  invert: PropTypes.bool.isRequired,
  frontView: PropTypes.node.isRequired,
  backView: PropTypes.node.isRequired
};

export default FlipCard;
