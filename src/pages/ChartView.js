import React, { Component } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

class ChartView extends Component {
  state = {
  }

  render = () => (
    <StyledContainer>
      Chart
    </StyledContainer>
  );
}

export default ChartView;
