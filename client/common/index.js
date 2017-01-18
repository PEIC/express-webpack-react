import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app.jsx';

const $container = document.querySelector('#container');

ReactDOM.render(<AppContainer><App /></AppContainer>, $container);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./app.jsx', () => {
    const NextApp = require('./app.jsx').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      $container
    );
  });
}