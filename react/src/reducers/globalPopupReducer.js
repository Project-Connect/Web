/**
* This reducer is used for handling all state changes for a display component
*/

//specifying initial state of the component
const initialState = {
  showError: false,
  errorContent: ""
}

const globalPopupReducer = (state = initialState, action) => {
  // action has 2 attribute, type and payload, type determines what is happening
  // payload is the data used to mutate the state.
  switch (action.type) {
    // By convention via online redux documentation, use ALL_CAPS for cases
    case "SHOW_ERROR":
      //checkout ES6 Spread syntax if you're not sure what {...Object} is doing
      return { ...state, showError: true, errorContent: action.payload}

    case "CLOSE_ERROR":
      return { ...state, showError: false, errorContent: ""}

    default: return state;
  }
}

export default globalPopupReducer
