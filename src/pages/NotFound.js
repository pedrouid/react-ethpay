import React from 'react';
import styled from 'styled-components';
import Link from '../components/Link';

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.4;
`;

const NotFound = () => (
  <StyledContainer>
    <Link to="/">
      <h1>404 Page Not Found</h1>
    </Link>
  </StyledContainer>
);

export default NotFound;
