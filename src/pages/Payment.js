import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Card from '../components/Card';
import Column from '../components/Column';
import Wrapper from '../components/Wrapper';
import Spinner from '../components/Spinner';
import logo from '../assets/logo.svg';
import symbol from '../libraries/symbol.json';
import profileImage from '../assets/profile.jpg';
import { ethereumGetRate } from '../redux/_ethereum';
import { fonts, colors } from '../styles';

const StyledLogo = styled.img`
  padding: 30px;
  margin: 0 auto;
  width: 70%;
`;

const StyledName = styled.p`
  font-size: ${fonts.h3};
  margin-bottom: 20px;
`;

const StyledProfile = styled.img`
  width: 30%;
  border-radius: 50%;
`;

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

const StyledButton = styled.div`
  color: rgb(${colors.white});
  display: inline-block;
  cursor: pointer;
  font-weight: 700;
  width: 30%;
  font-size: 20px;
  margin-top: 30px;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 20px;
  background-image: linear-gradient(to left, rgb(${colors.yellow}), rgb(${colors.blue}));
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
    console.log(newState);
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
    <Wrapper>
      <Column>
        <StyledLogo src={logo} alt="EthPay" />
        <Card
          invert={this.state.backView}
          frontView={
            <div>
              <StyledProfile src={profileImage} alt="Profile" />
              <StyledName>{'Send to Pedro Gomes'}</StyledName>
              <StyledAmount>
                <StyledSymbol>{symbol.ETH}</StyledSymbol>
                <StyledInput type="text" value={this.state.input} onChange={this.updateInput} />
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
              <StyledButton onClick={() => this.setState({ backView: true })}>
                {'Next'}
              </StyledButton>
            </div>
          }
          backView={
            <div onClick={() => this.setState({ backView: false })}>{'This is back view'}</div>
          }
        />
      </Column>
    </Wrapper>
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
