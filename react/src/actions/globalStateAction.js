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

export function logout() {
  return function (dispatch) {
    dispatch({
      type: "CLEAR_USER"
    })
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
  }
}
