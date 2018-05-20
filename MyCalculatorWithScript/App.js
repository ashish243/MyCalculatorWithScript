import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { reducer } from './modules';
import CalculatorView from './CalculatorView';

// Created By Aashish Sharma

const store = createStore(reducer);

export default () => (
  <Provider store={store}>
    <CalculatorView />
  </Provider>
);
