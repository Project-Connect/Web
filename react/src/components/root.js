/*
This file is intended for grouping all the component into the application,
and provide routing for the application
*/
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import PropTypes from 'prop-types';

import ReduxExamples from "./examples/reduxExamples/examplePage"
import HomePage from "./homePage/homePage"


const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/ReduxExamples" component={ReduxExamples} />
      </div>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root;
