import React, { Component } from 'react';
import './App.css';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import { composeWithDevTools, devToolsEnhancer } from 'redux-devtools-extension';
import LightContainer from './actions/LightContainer'

import LightReducer from './reducer/LightReducer'
import CounterReducer from './reducer/CounterReducer';
import CounterComponent from './actions/CounterContainer';
class App extends Component {

  render() {

    const store = createStore(
      CounterReducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return (
      <Provider store={store} >
      <div className="App">
        <h1>west coast</h1>
        {/* <LightContainer /> */}
        <CounterComponent />
      </div>
      </Provider>
    );
  }
}

export default App;
