/*
This file exports functions that dispatch events to the global popup store
*/
import {showSuccess, showError} from './globalPopupAction'
import {apiAction} from './apiHandlerAction';

//set user credentials after login
function setUserCredentials(userToken) {
  return {
      type: "SET_USER",
      payload: userToken
    }
}


export function login(loginObject){
  return apiAction({
    url: "api/user/login",
    method: "POST",
    onSuccess: setUserCredentials,
    data:  {...loginObject}
  });
}

export function logout() {
  window.sessionStorage.clear()
  const logoutUrl = process.env.API_URL + '/api/user/logout';
  fetch(logoutUrl, {
      method: "GET",
      headers: {
          "Content-Type": "application/json; charset=utf-8"
      },
      credentials: 'include'
  })
  .then((res)=>{console.log(res)});
  return {
      type: "CLEAR_USER"
    }
}
