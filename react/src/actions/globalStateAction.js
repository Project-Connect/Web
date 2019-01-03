/*
This file exports functions that dispatch events to the global popup store
*/
import {showSuccess, showError} from './globalPopupAction'
import {apiAction} from './apiHandlerAction';

//set user credentials after login
function setUserCredentials(userToken) {
  return {
      type: "SET_USER",
      payload: userToken[0]
    }
}


export function login(username){
  return apiAction({
    url: "api/user/token/" + username,
    param: "GET",
    onSuccess: setUserCredentials
  });
}

export function logout() {
  return {
      type: "CLEAR_USER"
    }
}
