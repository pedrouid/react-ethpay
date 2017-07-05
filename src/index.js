import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import { globalStyles } from './styles';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';

// eslint-disable-next-line
injectGlobal`${globalStyles}`;

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
registerServiceWorker();
