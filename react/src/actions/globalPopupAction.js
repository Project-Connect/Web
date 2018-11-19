/*
This file exports functions that dispatch events to the global popup store
*/

export function showError(content) {
  return function (dispatch) {
    dispatch({
      type: "SHOW_ERROR",
      payload: content
    })
  }
}

export function closeError() {
  return function (dispatch) {
    dispatch({
      type: "CLOSE_ERROR",
    })
  }
}
