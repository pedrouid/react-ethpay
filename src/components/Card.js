import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, transitions } from '../styles';

const StyledCard = styled.div`
  transition: ${transitions.base};
  background: rgba(${colors.white}, 0.05);
  padding: 50px 20px;
  transform: ${({ invert }) => (invert ? 'rotateY(180deg)' : 'rotateY(0deg)')};
`;

const StyledCardWrapper = styled.div`
  height: 425px;
  position: relative;
  transition: ${transitions.base};
  transform: ${({ invert }) => (invert ? 'rotateY(180deg)' : 'rotateY(0deg)')};
`;

const StyledCardContent = styled.div`
  position: absolute;
  height: 100%;
  transition: ${transitions.base};
  opacity: ${({ show }) => (show ? 1 : 0)};
  transform: ${({ show }) => (show ? 'translateY(0)' : 'translateY(15px)')};
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  pointer-events: ${({ show }) => (show ? 'auto' : 'none')};
`;

const Card = ({ invert, frontView, backView }) =>
  (<StyledCard invert={invert}>
    <StyledCardWrapper invert={invert}>
      <StyledCardContent show={!invert}>
        {frontView}
      </StyledCardContent>
      <StyledCardContent show={invert}>
        {backView}
      </StyledCardContent>
    </StyledCardWrapper>
  </StyledCard>);

Card.propTypes = {
  invert: PropTypes.bool.isRequired,
  frontView: PropTypes.node.isRequired,
  backView: PropTypes.node.isRequired,
};

export default Card;
