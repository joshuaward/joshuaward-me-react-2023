import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/main.scss';
import App from './App';

import { Provider } from './context/index';

// icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
// import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons';

library.add(fas);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider>
    <App />
  </Provider>
);