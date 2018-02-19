/**
 * main.js
 *
 * Entry point for application
 */

import React from 'react';
import { render } from 'react-dom';

// Needed for react dev tools
if (typeof window !== 'undefined') {
  window.React = React;
}

render(
  <div>Hell World</div>,
  document.getElementById('main')
);

// Hot Module Replacement API
if (module.hot) module.hot.accept();
