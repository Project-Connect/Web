/*
This file is responsible for creating the redux store and injecting middleware
*/
import { applyMiddleware, createStore } from 'redux';
import reducer from "./reducers"

// this is a used for easy debugging via browser console, with colorful displays
// to highlight state before and after transition.
import logger from "redux-logger"

import apiHandler from "./custom_redux_middleware/api_call_handler"

const middleware = applyMiddleware(apiHandler, logger)
export default createStore(reducer, middleware)
