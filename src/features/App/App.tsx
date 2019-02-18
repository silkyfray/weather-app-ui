import React, { Component } from "react";
import "./App.scss";

import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import forecastSaga from "../../sagas/forecastSaga";
import { rootReducer } from "../../reducers";
import { Provider } from "react-redux";
import SearchContainer from "../Search/SearchContainer";
import ResultsContainer from "../Results/ResultsContainer";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(forecastSaga);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h2>24 Hour Weather Forecast</h2>
          <SearchContainer />
          <ResultsContainer />
        </div>
        ;
      </Provider>
    );
  }
}

export default App;
