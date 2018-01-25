import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Base from '../templates/base';
import FlipCard from '../components/FlipCard';
import Input from '../components/Input';
import Button from '../components/Button';
import Spinner from '../components/Spinner';
import symbol from '../libraries/symbol.json';
import profileImage from '../assets/profile.jpg';
import { ethereumGetRate } from '../redux/_ethereum';
import { fonts } from '../styles';

const StyledName = styled.p`
  font-size: ${fonts.h3};
  margin-bottom: 20px;
`;

const StyledProfile = styled.img`
  width: 30%;
  border-radius: 50%;
`;

const StyledConversion = styled.div`
  font-size: ${fonts.h4};
  opacity: 0.5;
  cursor: pointer;
  height: 30px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledConversionValue = styled.span`
  margin: 0 5px;
  font-weight: 400;
`;

const StyledAmount = styled.div`
  font-size: ${fonts.h2};
  padding-bottom: 10px;
`;

const StyledSymbol = styled.span`
  font-weight: 700;
  font-size: 1.2em;
`;

class Payment extends Component {
  state = {
    input: '0.05249432',
    conversion: '',
    selected: 'USD',
    backView: false
  };
  componentDidMount = () => {
    this.props.ethereumGetRate();
  };

  componentWillReceiveProps(newProps, newState) {
    this.checkUpdate(newProps, newState);
  }

  componentWillUpdate(newProps, newState) {
    this.checkUpdate(newProps, newState);
  }

  checkUpdate = (newProps, newState) => {
    if (newState.selected !== this.state.selected || newState.input !== this.state.input) {
      const input = newState.input || this.state.input;
      const selected = newState.selected || this.state.selected;
      this.updateConversion(input, newProps.rates[selected], selected);
    }
  };

  updateConversion = (input, rate, selected) => {
    const decimals = selected === 'ETH' || selected === 'BTC' ? 8 : 2;
    this.setState({
      conversion: (Number(input) * rate).toFixed(decimals)
    });
  };

  updateInput = ({ target }) => {
    this.setState({ input: target.value });
  };

  toggleCode = () => {
    const currencies = Object.keys(this.props.rates);
    const active = currencies.indexOf(this.state.selected);
    const idx = active + 1 < currencies.length ? active + 1 : 0;
    const selected = currencies[idx];
    this.setState({ selected });
  };

  render = () => (
    <Base>
      <FlipCard
        invert={this.state.backView}
        frontView={
          <div>
            <StyledProfile src={profileImage} alt="Profile" />
            <StyledName>{'Send to Pedro Gomes'}</StyledName>
            <StyledAmount>
              <StyledSymbol>{symbol.ETH}</StyledSymbol>
              <Input type="text" value={this.state.input} onChange={this.updateInput} />
            </StyledAmount>
            <StyledConversion onClick={this.toggleCode}>
              {this.props.fetching ? (
                <Spinner white />
              ) : (
                <div>
                  <StyledSymbol>{symbol[this.state.selected]}</StyledSymbol>
                  <StyledConversionValue>{this.state.conversion}</StyledConversionValue>
                </div>
              )}
            </StyledConversion>
            <Button onClick={() => this.setState({ backView: true })}>{'Next'}</Button>
          </div>
        }
        backView={
          <div onClick={() => this.setState({ backView: false })}>{'This is back view'}</div>
        }
      />
    </Base>
  );
}

Payment.propTypes = {
  ethereumGetRate: PropTypes.func.isRequired,
  fetching: PropTypes.bool.isRequired,
  rates: PropTypes.object.isRequired
};

const reduxProps = ({ ethereum }) => ({
  fetching: ethereum.fetching,
  rates: ethereum.rates
});

export default connect(reduxProps, { ethereumGetRate })(Payment);
