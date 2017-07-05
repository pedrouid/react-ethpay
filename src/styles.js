export const colors = {
  white: '255, 255, 255',
  black: '0, 0, 0',
  dark: '29, 29, 29',
  grey: '221, 221, 221',
  lightGrey: '238, 238, 238',
  darkGrey: '128, 128, 128',
  blue: '28, 134, 247',
  lightBlue: '197, 242, 255',
  yellow: '250, 217, 97',
  gold: '246, 203, 71',
  green: '79, 180, 128',
  red: '221, 69, 65'
};

export const fonts = {
  small: '12px',
  medium: '16px',
  large: '20px',
  h1: '30px',
  h2: '28px',
  h3: '24px',
  h4: '18px',
  h5: '16px'
};

export const transitions = {
  short: 'all 0.1s ease-in-out',
  base: 'all 0.2s ease-in-out',
  long: 'all 0.3s ease-in-out'
};

export const padding = {
  smallPadding: '15px',
  mediumPadding: '25px',
  largePadding: '50px'
};

export const responsive = {
  xxs: {
    min: 'min-width: 319px',
    max: 'max-width: 320px'
  },
  xs: {
    min: 'min-width: 479px',
    max: 'max-width: 480px'
  },
  sm: {
    min: 'min-width: 767px',
    max: 'max-width: 768px'
  },
  md: {
    min: 'min-width: 991px',
    max: 'max-width: 992px'
  },
  lg: {
    min: 'min-width: 1199px',
    max: 'max-width: 1200px'
  }
};

export const globalStyles = `
  @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700');

  html, body, #root, #router-root {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    background: rgb(${colors.dark});
    font-family: Lato, sans-serif;
    font-weight: 300;
    font-size: ${fonts.medium};
    color: rgb(${colors.white});
    position: relative;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button:active,
  button:focus,
  button.active {
    background-image: none;
    outline: 0;
    -webkit-box-shadow: none;
            box-shadow: none;
  }

  h1 { font-size: ${fonts.h1} }
  h2 { font-size: ${fonts.h2} }
  h3 { font-size: ${fonts.h3} }
  h4 { font-size: ${fonts.h4} }
  h5 { font-size: ${fonts.h5} }
  h6 { font-size: ${fonts.h6} }

  [tabindex] {
    outline: none;
    height: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  div {
    width: 100%;
  }

  * {
    box-sizing: border-box !important;
  }

  button {
    border-style: none;
    line-height: 1em;
  }
`;
