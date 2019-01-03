/*
This file exports functions that dispatch events to the global popup store
*/

export function showError(content) {
  return {
      type: "SHOW_ERROR",
      payload: content
  }
}

export function closeError() {
  return {
      type: "CLOSE_ERROR",
  }
}


export function showSuccess(content) {
  return {
      type: "SHOW_SUCCESS",
      payload: content
  }
}

export function closeSuccess() {
  return{
      type: "CLOSE_SUCCESS",
  }
}
