import React, { Component } from 'react';
import styled from 'styled-components';
import bitpayLogo from '../assets/logo.svg';
import swapIcon from '../assets/swap.svg';
import profileImage from '../assets/profile.jpg';
import { fonts, colors } from '../styles';

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

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

const StyledCard = styled.div`
  background: rgba(${colors.white}, 0.05);
  padding: 50px 20px;
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

const StyledSymbol = styled.span`
  font-weight: 700;
  font-size: 1.2em;
`;

const StyledConversionValue = styled.span`
  margin: 0 5px;
  font-weight: 400;
`;

const StyledAmount = styled.div`
  font-size: ${fonts.h2};
  padding-bottom: 10px;
`;

const StyledConversion = styled.div`
  font-size: ${fonts.h4};
  opacity: 0.5;
`;

const StyledToggleCrypto = styled.img`
  width: 26px;
  margin: 0 5px -3px;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

const StyledButton = styled.button`
  color: rgb(${colors.white});
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
    inputValue: '0.07520000',
    conversionValue: '',
    crypto: true
  }

  componentDidMount = () => {
    this.updateConversion();
  }

  updateConversion = (value) => {
    const conversion = 2589.07;
    const inputValue = value || this.state.inputValue;
    if (this.state.crypto) {
      const result = (Number(inputValue) * conversion).toFixed(2);
      this.setState({ conversionValue: String(result) });
    } else {
      const result = (Number(inputValue) / conversion).toFixed(8);
      this.setState({ conversionValue: String(result) });
    }
  }

  updateInput = ({ target }) => {
    const decimals = target.value.split('.')[1];
    console.log(Number(decimals));
    this.setState({ inputValue: target.value });
    this.updateConversion(target.value);
  }

  toggleCrypto = () => {
    this.setState({
      inputValue: this.state.conversionValue,
      conversionValue: this.state.inputValue,
      crypto: !this.state.crypto
    });
  }

  render = () => (
    <StyledContainer>
      <StyledLogo src={bitpayLogo} alt="BitPay" />
      <StyledCard>
        <StyledProfile src={profileImage} alt="Profile" />
        <StyledName>Send to {'Pedro Gomes'}</StyledName>
        <StyledAmount>
          <StyledSymbol>{(this.state.crypto) ? '฿' : '$'}</StyledSymbol>
          <StyledInput
            type="text"
            value={this.state.inputValue}
            onChange={this.updateInput}
          />
        </StyledAmount>
        <StyledConversion>
          <StyledSymbol>{(this.state.crypto) ? '$' : '฿'}</StyledSymbol>
          <StyledConversionValue>{this.state.conversionValue}</StyledConversionValue>
          <StyledToggleCrypto src={swapIcon} onClick={this.toggleCrypto} />
        </StyledConversion>
        <StyledButton>{'Next'}</StyledButton>
      </StyledCard>
    </StyledContainer>
  );
}

export default Payment;
