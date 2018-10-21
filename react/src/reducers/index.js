/**
* This file is used as an entry point to all the reducers in this folder
* We will combine all the reducers into one large store of reducers for others
* to use.
*/
import {combineReducers} from "redux"
import exampleReducer from "./exampleReducer"
import exampleReducer2 from "./exampleReducer2"

const reducer = combineReducers({
  // the left hand side will be the variable name used by components
  // think of it as a rename for simplication, it could remain the same.
  example1: exampleReducer,
  example2: exampleReducer2
})

export default reducer
