/*
This file exports functions that dispatch events to the global popup store
*/

export function login(content) {
  return function (dispatch) {
    dispatch({
      type: "SET_USER",
      payload: content
    })
  }
}
