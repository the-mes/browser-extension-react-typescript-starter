import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import { Popup } from './popup';

import './index.scss';

ReactDOM.render(
  <StrictMode>
    <Popup />
  </StrictMode>,
  document.getElementById('root')
);
