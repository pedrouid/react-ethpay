import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Line as LineChart } from 'react-chartjs';
import Wrapper from '../components/Wrapper';
import { bitcoinGetHistory } from '../redux/_bitcoin';
import { colors } from '../styles';

const StyledHeader = styled.h1`
  color: rgb(${colors.white});
`;

class ChartView extends Component {
  state = {
    period: 'monthly',
    selected: 'USD',
    average: true
  }
  componentDidMount = () => {
    this.props.bitcoinGetHistory(this.state.selected, this.state.period, this.state.average);
  }
  render = () => (
    <Wrapper fetching={this.props.fetching}>
      <StyledHeader>{'Bitcoin History'}</StyledHeader>
      <LineChart data={this.props.history} width="1000" height="600" />
    </Wrapper>
  );
}

ChartView.propTypes = {
  bitcoinGetHistory: PropTypes.func.isRequired,
  fetching: PropTypes.bool.isRequired,
  history: PropTypes.array.isRequired
};

const reduxProps = ({ bitcoin }) => ({
  fetching: bitcoin.fetching,
  history: bitcoin.history
});

export default connect(reduxProps, { bitcoinGetHistory })(ChartView);
