import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import List from './components/List';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <h1>Test task</h1>
      <List/>
    </Provider>
  );
}

export default App;
