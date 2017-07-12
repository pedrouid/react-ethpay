import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Column from '../components/Column';
import Wrapper from '../components/Wrapper';
import Spinner from '../components/Spinner';
import bitpayLogo from '../assets/logo.svg';
import profileImage from '../assets/profile.jpg';
import { bitpayGetRates } from '../redux/_bitpay';
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
    input: '0.05249432',
    conversion: '',
    code: 'USD'
  }
  componentDidMount = () => {
    this.props.bitpayGetRates(this.state.code);
  }

  componentWillReceiveProps = (newProps) => {
    if (!this.props.rate) {
      this.updateConversion(this.state.input, newProps.rate);
    }
  }

  updateConversion = (input, rate) =>
    this.setState({ conversion: (Number(input) * rate).toFixed(2) });

  updateInput = ({ target }) => {
    let input = target.value;
    if (input.match(/[a-z]/i)) return null;
    if (input.indexOf('.') === -1) input += '.00';
    if (input.split('.')[1].length > 8) return null;
    this.setState({ input });
    this.updateConversion(input, this.props.rate);
  }

  toggleCode = () => {
    if (this.state.code === 'USD') {
      this.setState({ code: 'EUR' });
      this.props.bitpayGetRates('EUR');
    } else {
      this.setState({ code: 'USD' });
      this.props.bitpayGetRates('USD');
    }
  }

  render = () => (
    <Wrapper>
      <Column>
        <StyledLogo src={bitpayLogo} alt="BitPay" />
        <StyledCard>
          <StyledProfile src={profileImage} alt="Profile" />
          <StyledName>{'Send to Pedro Gomes'}</StyledName>
          <StyledAmount>
            <StyledSymbol>{'฿'}</StyledSymbol>
            <StyledInput
              type="text"
              value={this.state.input}
              onChange={this.updateInput}
            />
          </StyledAmount>
          <StyledConversion onClick={this.toggleCode}>
            {this.props.fetching
              ? <Spinner white />
              : <div>
                <StyledSymbol>{(this.state.code === 'USD') ? '$' : '€'}</StyledSymbol>
                <StyledConversionValue>{this.state.conversion}</StyledConversionValue>
              </div>}
          </StyledConversion>
          <StyledButton>{'Next'}</StyledButton>
        </StyledCard>
        <Link to="/chart">{'View chart'}</Link>
      </Column>
    </Wrapper>
  );
}

Payment.propTypes = {
  bitpayGetRates: PropTypes.func.isRequired,
  fetching: PropTypes.bool.isRequired,
  rate: PropTypes.number.isRequired
};

const reduxProps = ({ bitpay }) => ({
  fetching: bitpay.fetching,
  rate: bitpay.rate
});

export default connect(reduxProps, { bitpayGetRates })(Payment);
