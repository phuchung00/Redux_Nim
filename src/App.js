import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import Store from './store'
import NimContainer from './container'

function App() {
  return (
    <Provider store={Store}>
      <NimContainer />
    </Provider>
  );
}

export default App;
