/*
This file is responsible for creating the redux store and injecting middleware
*/
import { applyMiddleware, createStore } from 'redux';
import reducer from "./reducers"
import apiHandler from "./custom_redux_middleware/api_call_handler"

const middleware = applyMiddleware(apiHandler)
export default createStore(reducer, middleware)
